import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IWalletModel } from './schema/wallet.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';

@Injectable()
export class WalletsService {
  constructor(
    @InjectModel('wallets') private readonly walletModel: Model<IWalletModel>,
  ) {}

  async findAll(): Promise<IWalletModel[]> {
    return this.walletModel.find().exec();
  }

  async findOne(where: object): Promise<IWalletModel | null> {
    return this.walletModel.findOne(where).exec();
  }

  async create(data: CreateWalletDto): Promise<IWalletModel> {
    const createdEntity = new this.walletModel(data);
    return createdEntity.save();
  }

  async update(
    id: string,
    data: UpdateWalletDto,
  ): Promise<IWalletModel | null> {
    return this.walletModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.walletModel.findByIdAndDelete(id).exec();
  }
}
