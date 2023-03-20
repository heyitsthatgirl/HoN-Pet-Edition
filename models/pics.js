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
      // references: {model:"User", key:"User_email"},
      validate: {
        isEmail: true,
      },
    },
    file:{
      type: DataTypes.STRING,
      allowNull: false,
    },
    vote:{
      type: DataTypes.INTEGER,
      allNull: true
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