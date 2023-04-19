import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript"
import { Polos } from "./polos.model";
import { Unidades } from "./unidades.model";

@Table({
  tableName: "usuarios",
  timestamps: false
})

export class Usuarios extends Model {
  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  cpf!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  rank_level!: string;

  @BelongsTo(() => Polos, 'unidades_id')
  unidades!: Unidades;

  @BelongsTo(() => Polos, 'polos_id')
  polos!: Polos;

  @Column({
    type: DataType.DATE,
    allowNull: false
  })
  date!: string;
  
}