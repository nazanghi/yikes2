'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    static associate(models) {
    }
  };
  Tag.init({
    review_id: {
      type: DataTypes.INTEGER,
    field: "review_id",
    references: {
      model: "reviews",
      key: "id"
      },
    allowNull: false
    },
    category_id: { 
      type:DataTypes.INTEGER,
      field: "category_id",
      references: {
        model: "category",
        key: "id"
      },
      allowNull: false
      }, 
    }, {
      sequelize,
      modelName: 'Tag',
      tableName: 'tags'
  });
  return Tag;
};