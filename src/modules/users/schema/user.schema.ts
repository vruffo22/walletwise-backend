import mongoose, { Schema, Document } from 'mongoose';

// Define the IUserModel interface
export interface IUserModel extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

// Create the UserSchema
export const UserSchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  created_at: { type: Date, required: false, trim: true },
  updated_at: { type: Date, required: false, trim: true },
});

export const User = mongoose.model<IUserModel>('users', UserSchema);
