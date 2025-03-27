import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsEnum,
} from 'class-validator';
import {
  TransactionCategory,
  TransactionType,
} from '../schema/transaction.schema';

export class CreateTransactionDto {
  @IsNumber()
  @IsNotEmpty()
  amount: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(TransactionType)
  type: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(TransactionCategory)
  category: string;

  @IsString()
  @IsNotEmpty()
  wallet_id?: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @IsOptional()
  created_at?: Date;

  @IsDate()
  @IsOptional()
  updated_at?: Date;
}
