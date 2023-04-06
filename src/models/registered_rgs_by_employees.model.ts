import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript"
import { Usuarios } from "./users.model";

@Table({
  tableName: "registered_rgs_by_employees",
  timestamps: false
})

export class RegisteredRgsByEmployees extends Model {
  @Column({
    type: DataType.STRING(255),
    allowNull: false
  })
  name!: string;

  @BelongsTo(() => Usuarios, 'updated_id')
  updatedBy!: Usuarios;

  @BelongsTo(() => Usuarios, 'created_id')
  createdBy!: Usuarios;

  
}