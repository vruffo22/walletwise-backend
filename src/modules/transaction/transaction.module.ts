import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TransactionSchema } from './schema/transaction.schema';
import { TransactionsController } from './transaction.controller';
import { TransactionsService } from './transaction.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'transactions', schema: TransactionSchema },
    ]),
  ],
  controllers: [TransactionsController],
  providers: [TransactionsService],
  exports: [TransactionsService, MongooseModule],
})
export class TransactionsModule {}
