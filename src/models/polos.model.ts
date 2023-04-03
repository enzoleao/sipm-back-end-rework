import { DataTypes, Model } from 'sequelize'
import sequelizeConnection from '../services/connection'

interface PolosAttributes {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

class polos extends Model<PolosAttributes> implements PolosAttributes {
    public id!: number
    public name!: string

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

polos.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName:"polos"
})
  
export default polos