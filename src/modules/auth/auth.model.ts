import {Table, Column, Model, IsEmail} from 'sequelize-typescript';

@Table({ tableName: 'User', freezeTableName: true })
export class AuthModel extends Model {
  @IsEmail
  @Column({ unique: true, allowNull: false })
  email: string;

  @Column
  passwordHash: string;
}
