import { Table, Model, Column, DataType, HasMany, ForeignKey } from "sequelize-typescript"
import { Usuarios } from "./usuarios.model";

@Table({
  timestamps:false,
  tableName: "polos"
})

export class Polos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
 
  @ForeignKey(()=>"id")
}