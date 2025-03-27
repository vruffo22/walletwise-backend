import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './modules/users/users.module';
import { WalletsModule } from './modules/wallet/wallet.module';
import { TransactionsModule } from './modules/transaction/transaction.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(
      `mongodb+srv://${process.env.userMongo}:${process.env.passMongo}@${process.env.hostMongo}/${process.env.MONGO_DBNAME}?${process.env.optionsMongo}`,
    ),
    UsersModule,
    WalletsModule,
    TransactionsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
