import { Table, Model, Column, DataType, BelongsTo, ForeignKey, HasOne } from "sequelize-typescript"
import { Polos } from "./polos.model";

@Table({
  tableName: "usuarios",
  timestamps: false
})

export class Usuarios extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name!: string;

  @ForeignKey(() => Polos)
  @Column
  poloId!: number;

  @BelongsTo(() => Polos)
  polos!: Polos;
  
}