import { Table, Model, Column, DataType } from "sequelize-typescript"

@Table({
  tableName: "cpf_registred",
  timestamps: false
})

export class CpfRegistred extends Model {
  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  cpf!: string;
}