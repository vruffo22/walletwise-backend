import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WalletSchema } from './schema/wallet.schema';
import { WalletsController } from './wallet.controller';
import { WalletsService } from './wallet.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'wallets', schema: WalletSchema }]),
  ],
  controllers: [WalletsController],
  providers: [WalletsService],
  exports: [WalletsService, MongooseModule],
})
export class WalletsModule {}
