import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'Review', freezeTableName: true })
export class ReviewModel extends Model {
  @Column
  name: string;
  @Column
  title: string;
  @Column
  description: string;
  @Column
  rating: string;

  @Column({ unique: true })
  product_id: string;
}
