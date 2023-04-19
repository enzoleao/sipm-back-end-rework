import { Table, Model, Column, DataType, BelongsTo } from "sequelize-typescript"
import { Employees } from "./employees.model";

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

  @BelongsTo(() => Employees, 'updated_id')
  updatedBy!: Employees;

  @BelongsTo(() => Employees, 'created_id')
  createdBy!: Employees;

  
}