import { ConfigService } from '@nestjs/config';
import { SequelizeModuleOptions } from '@nestjs/sequelize';

export const getSequelizeConfig = async (
  configService: ConfigService,
): Promise<SequelizeModuleOptions> => {
  return {
    host: configService.get('DB_HOST'),
    dialect: configService.get('DB_DIALECT'),
    username: configService.get('DB_USERNAME'),
    password: configService.get('DB_PASSWORD'),
    database: configService.get('DB_NAME'),
    autoLoadModels: true,
    synchronize: true,
  };
};
