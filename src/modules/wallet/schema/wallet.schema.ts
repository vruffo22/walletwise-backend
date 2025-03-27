import mongoose, { Schema, Document } from 'mongoose';

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  CAD = 'CAD',
}
// Define the IWalletModel interface
export interface IWalletModel extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  balance: number;
  currency: Enumerator<Currency>;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
}

// Create the WalletSchema
export const WalletSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  balance: { type: Number, required: true, trim: true },
  currency: { type: String, required: true, trim: true },
  user_id: { type: String, required: true, trim: true },
  created_at: { type: Date, required: false, trim: true },
  updated_at: { type: Date, required: false, trim: true },
});

export const Wallet = mongoose.model<IWalletModel>('wallets', WalletSchema);
