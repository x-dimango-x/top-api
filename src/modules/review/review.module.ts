import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ReviewController } from './review.controller';
import { ReviewModel } from './review.model';
import { ReviewService } from './review.service';

@Module({
  controllers: [ReviewController],
  imports: [SequelizeModule.forFeature([ReviewModel])],
  providers: [ReviewService],
})
export class ReviewModule {}
