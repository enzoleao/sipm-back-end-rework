import { Table, Model, Column, DataType, BelongsTo, ForeignKey, HasOne } from "sequelize-typescript"
import { Polos } from "./polos.model";

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

  @HasOne(() => Polos, 'id')
  polos!: Polos;
  
}