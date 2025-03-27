import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../users/schema/user.schema';
import { UsersModule } from '../users/users.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'users', schema: UserSchema }]),
    JwtModule.register({
      global: true,
    }),
    UsersModule,
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
