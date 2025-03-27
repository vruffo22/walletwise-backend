import mongoose, { Schema, Document } from 'mongoose';

// Define the TransactionType enum
export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

// Define the TransactionCategory enum
export enum TransactionCategory {
  FOOD = 'FOOD',
  TRANSPORT = 'TRANSPORT',
  SHOPPING = 'SHOPPING',
  RENT = 'RENT',
  SALARY = 'SALARY',
  OTHER = 'OTHER',
}

// Define the ITransactionModel interface
export interface ITransactionModel extends Document {
  _id: mongoose.Types.ObjectId;
  amount: number;
  type: Enumerator<TransactionCategory>;
  category: Enumerator<TransactionCategory>;
  wallet_id: string;
  description: string;
  date: Date;
  created_at?: Date;
  updated_at?: Date;
}

// Create the TransactionSchema
export const TransactionSchema: Schema = new Schema({
  amount: { type: Number, required: true, trim: true },
  type: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  wallet_id: { type: String, required: true, trim: true },
  description: { type: String, required: true, trim: true },
  date: { type: Date, required: true, trim: true },
  created_at: { type: Date, required: false, trim: true },
  updated_at: { type: Date, required: false, trim: true },
});

export const Transaction = mongoose.model<ITransactionModel>(
  'transactions',
  TransactionSchema,
);
