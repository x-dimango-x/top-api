import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductModel } from './product.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [ProductController],
  imports: [SequelizeModule.forFeature([ProductModel])],
})
export class ProductModule {}
