import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { IUserModel } from './schema/user.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcryptjs from 'bcryptjs';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('users') private readonly userModel: Model<IUserModel>,
  ) {}

  async findAll(): Promise<IUserModel[]> {
    return this.userModel.find().exec();
  }

  async findOne(where: object): Promise<IUserModel | null> {
    return this.userModel.findOne(where).exec();
  }

  async create(data: CreateUserDto): Promise<IUserModel> {
    data.password = await bcryptjs.hash(data.password, 10);
    const createdEntity = new this.userModel(data);
    return createdEntity.save();
  }

  async update(id: string, data: UpdateUserDto): Promise<IUserModel | null> {
    return this.userModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async remove(id: string): Promise<any> {
    return this.userModel.findByIdAndDelete(id).exec();
  }
}
