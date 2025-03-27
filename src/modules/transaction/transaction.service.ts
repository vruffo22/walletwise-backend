import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { ITransactionModel } from './schema/transaction.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionsService {
  constructor(
    @InjectModel('transactions')
    private readonly transactionModel: Model<ITransactionModel>,
  ) {}

  async findAll(): Promise<ITransactionModel[]> {
    return this.transactionModel.find().exec();
  }

  async findOne(where: object): Promise<ITransactionModel | null> {
    return this.transactionModel.findOne(where).exec();
  }

  async create(data: CreateTransactionDto): Promise<ITransactionModel> {
    const createdEntity = new this.transactionModel(data);
    return createdEntity.save();
  }

  async update(
    id: string,
    data: UpdateTransactionDto,
  ): Promise<ITransactionModel | null> {
    return this.transactionModel
      .findByIdAndUpdate(id, data, { new: true })
      .exec();
  }

  async remove(id: string): Promise<any> {
    return this.transactionModel.findByIdAndDelete(id).exec();
  }
}
