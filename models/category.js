'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      Category.belongsToMany(models.Review, {
        through: models.Tag,
        foreignKey: "category_id",
        onDelete: "cascade",
        onUpdate: "cascade"
      })
    }
  };
  Category.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
  });
  return Category;
};