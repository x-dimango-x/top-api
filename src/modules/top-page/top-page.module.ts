import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { TopPageModel } from './top-page.model';

@Module({
  controllers: [TopPageController],
  imports: [SequelizeModule.forFeature([TopPageModel])],
})
export class TopPageModule {}
