import {Column, DataType, Model, Table} from 'sequelize-typescript';

export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Product
}

interface IHhData {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export class TopPageAdvantage {
  @Column
  title: string;
  @Column
  description: string;
}

@Table({tableName: 'TopPage', freezeTableName: true})
export class TopPageModel extends Model {
  @Column(DataType.ENUM('Courses', 'Services', 'Books', 'Product'))
  firstCategory: TopLevelCategory;
  @Column
  secondCategory: string;
  @Column({unique: true})
  alias: string;
  @Column
  title: string;
  @Column
  category: string;
  @Column(DataType.JSON)
  hh?: IHhData;
  @Column(DataType.JSON)
  advantages: TopPageAdvantage;
  @Column
  seoText: string;
  @Column
  tagsTitle: string;
  @Column(DataType.JSON)
  tags: string[];
}
