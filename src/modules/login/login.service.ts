import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class LoginService {
  constructor(
    private jwtService: JwtService,
    private readonly configService: ConfigService,
    private userService: UsersService,
  ) {}

  async loginUser(entity: LoginDto) {
    const user = await this.userService.findOne({
      email: entity.email,
    });
    if (user) {
      const match = await bcryptjs.compare(entity.password, user.password);
      if (match) {
        const id = user.id;
        const payload = {
          name: user.name,
          email: user.email,
        };
        const accessToken = await this.jwtService.sign(payload, {
          expiresIn: this.configService.get('timeOutToken'),
          secret: this.configService.get('keyToken'),
        });
        return {
          token: accessToken,
          user: { name: user.name, email: user.email, id: user._id },
        };
      }
      throw new HttpException('Password is incorrect', 401);
    }
    throw new HttpException('User does not exist', 404);
  }
}
