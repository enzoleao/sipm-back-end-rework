import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  tableName: "alerts",
  timestamps:false,
})

export class Alerts extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  title!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message!: string;
}