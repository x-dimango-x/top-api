import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { FindProductDto } from './dto/find-product.dto';
import { ProductModel } from './product.model';

@Controller('product')
export class ProductController {
  @Post('create')
  async create(@Body() dto: Omit<ProductModel, '_id'>) {}

  @Get('get/:id')
  async get(@Param('id') id: string) {}

  @Delete('delete/:id')
  async delete(@Param(':id') id: string) {}

  @Patch('patch/:id')
  async patch(@Param(':id') id: string, dto: ProductModel) {}

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindProductDto) {}
}
