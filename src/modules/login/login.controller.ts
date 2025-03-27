import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  @UsePipes(new ValidationPipe())
  loginUser(@Body() user: LoginDto) {
    return this.loginService.loginUser(user);
  }
}
