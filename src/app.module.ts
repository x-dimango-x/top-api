import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from './modules/auth/auth.module';
import { TopPageModule } from './modules/top-page/top-page.module';
import { ProductModule } from './modules/product/product.module';
import { ReviewModule } from './modules/review/review.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { getSequelizeConfig } from './configs/sequelize.config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    SequelizeModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getSequelizeConfig,
    }),
    AuthModule,
    TopPageModule,
    ProductModule,
    ReviewModule,
  ],
})
export class AppModule {}
