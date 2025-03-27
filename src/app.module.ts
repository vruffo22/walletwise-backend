import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { WalletsModule } from './modules/wallet/wallet.module';
import { TransactionsModule } from './modules/transaction/transaction.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Make ConfigModule globally available
    }),
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        uri: `mongodb+srv://${configService.get<string>('userMongo', '')}:${configService.get<string>('passMongo', '')}@${configService.get<string>('hostMongo', '')}/${configService.get<string>('dbNameMongo', '')}?${configService.get<string>('optionsMongo', '')}`,
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    WalletsModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
