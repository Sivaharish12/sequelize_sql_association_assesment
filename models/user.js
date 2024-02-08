'use strict';
const {
  Model
} = require('sequelize');
const db = require('./index');
const userSubscription = require('./usersubscription');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      const UserSubscription = models.userSubscription;

      user.hasMany(UserSubscription,{
        foreignKey:'user_id'
      });
    }
  }
  user.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};

