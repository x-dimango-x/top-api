import { Column, DataType, Model, Table } from 'sequelize-typescript';

export class ICharacteristic {
  @Column
  title: string;
  @Column
  value: string;
}

@Table({ tableName: 'Product' })
export class ProductModel extends Model<ProductModel> {
  @Column
  image: string;
  @Column
  title: string;
  @Column
  price: number;
  @Column
  oldPrice: number;
  @Column
  credit: number;
  @Column
  calculatedRating: number;
  @Column
  description: string;
  @Column
  advantages: string;
  @Column(DataType.JSON)
  categories: string[];
  @Column(DataType.JSON)
  tags: string[];
  @Column(DataType.JSON)
  characteristics: ICharacteristic[];
}
