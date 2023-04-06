import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  tableName: "unidades",
  timestamps: false
})

export class Unidades extends Model {
  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  name!: string;

}