import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript"
import { Polos } from "./polos.model";

@Table({
  tableName: "employees",
  timestamps: false
})

export class Employees extends Model {
  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  username!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  password!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  roles_level!: number;

  @BelongsTo(() => Polos, 'polos_id')
  polos!: Polos;
  
}