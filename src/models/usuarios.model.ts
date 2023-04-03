import { DataTypes, Model } from 'sequelize'
import polosModel from './polos.model'
import sequelizeConnection from '../services/connection'

interface UsersAttributes {
  id: number;
  name: string;
  password: string;
  polo: any;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

class users extends Model<UsersAttributes> implements UsersAttributes {
  public id!: number
  public name!: string
  public polo!: any;
  public password!: string;
  
    // timestamps!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

users.init({
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
       type: DataTypes.STRING
    },
    polo: {
      type: DataTypes.INTEGER,
    },
    
  }, {
    timestamps: true,
    sequelize: sequelizeConnection,
    paranoid: true,
    tableName:"users",
})

users.hasOne(polosModel, {
  foreignKey: 'id',
  as: 'polos' 
});

export default users