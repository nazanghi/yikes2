'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.Account, {
        foreignKey: 'account_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
      Review.belongsToMany(models.Category, {
        through: models.Tag,
        foreignKey: 'Review_id',
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    }
  };
  Review.init({
    account_id: DataTypes.INTEGER,
    location: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    link: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};