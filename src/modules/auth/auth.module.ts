import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModel } from './auth.model';

@Module({
  controllers: [AuthController],
  imports: [SequelizeModule.forFeature([AuthModel])],
})
export class AuthModule {}
