// const user=require('./user')

'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class userSubscription extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      const user = models.user;
      userSubscription.belongsTo(user,{
        foreignKey:'id'
      });
    }
  }

  userSubscription.init({
    app_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_id: DataTypes.INTEGER,
    sub_id: DataTypes.INTEGER,
    type: DataTypes.STRING,
    subscribed: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'userSubscription',
    tableName:'userSubscriptions'
  });

  return userSubscription;
};