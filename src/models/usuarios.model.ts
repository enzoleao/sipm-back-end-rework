import { Table, Model, Column, DataType, HasOne, ForeignKey, HasMany } from "sequelize-typescript"
import { Polos } from "./polos.model";
import dbConnection from "../services/connection";
@Table({
  
  timestamps:false,
  tableName: "usuarios",
  
})

export class Usuarios extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;

  @ForeignKey(() => Polos)
  polosId!: number;

  @HasOne(() => Polos)
  polos!: Polos[]
  
}