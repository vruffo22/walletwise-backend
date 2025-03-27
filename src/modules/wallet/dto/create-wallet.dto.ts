import {
  IsString,
  IsOptional,
  IsNotEmpty,
  IsDate,
  IsNumber,
  IsEnum,
} from 'class-validator';
import { Currency } from '../schema/wallet.schema';

export class CreateWalletDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  balance: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Currency)
  currency: Currency;

  @IsString()
  @IsNotEmpty()
  user_id: string;

  @IsDate()
  @IsOptional()
  created_at?: Date;

  @IsDate()
  @IsOptional()
  updated_at?: Date;
}
