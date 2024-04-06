import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Sequelize, DataTypes, Model } from "sequelize";
import {sequelize} from "../config.js";


class User extends Model {
  async comparePassword(password) {
    return bcrypt.compare(password, this.password);
  }
  async generateJWT() {
    const token = jwt.sign({ id: this.id }, "your_secret_key");
    return token;
  }
}


User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'admin'
    }
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'User',
    hooks: {
      async beforeCreate(user) {
        const hashedPassword = await bcrypt.hash(user.password, 10);
        user.password = hashedPassword;
      }
    }
  });

User.sync({ force: false });

export {User};
