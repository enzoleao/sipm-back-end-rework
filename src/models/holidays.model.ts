import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  tableName: "holidays",
  timestamps:false,
})

export class Holidays extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: string;
}