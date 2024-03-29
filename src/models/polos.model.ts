import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  tableName: "polos",
  timestamps:false,
})

export class Polos extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name!: string;
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  is_actived!: boolean;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  vacantsPerHours!: string;
}