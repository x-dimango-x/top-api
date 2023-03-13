import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Delete,
  Patch,
  HttpCode,
} from '@nestjs/common';
import { FindTopPageDto } from './dto/find-top-page-dto';
import { TopPageModel } from './top-page.model';

@Controller('top-page')
export class TopPageController {
  @Post('create')
  async create(@Body() dto: Omit<TopPageModel, '_id'>) {}

  @Get('get/:id')
  async get(@Param('id') id: string) {}

  @Delete('delete/:id')
  async delete(@Param(':id') id: string) {}

  @Patch('update/:id')
  async patch(@Param(':id') id: string, dto: TopPageModel) {}

  @HttpCode(200)
  @Post('find')
  async find(@Body() dto: FindTopPageDto) {}
}
