const sequelize = require("../config/connection");
const { Model, DataTypes } = require("sequelize");

class Pics extends Model {
  
}

Pics.init(
  {
    id:{
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      // references: {model:"User", key:"User_email"},
      validate: {
        isEmail: true,
      },
    },
    file:{
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Pics",
  },
);

module.exports = Pics;