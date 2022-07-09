import { BOOLEAN, Sequelize } from "sequelize";

export default (sequelize) => {
  class Car extends Sequelize.Model{}

  Car.init({
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    mark: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Mark cannot be null!",
        },
        notEmpty: {
          msg: "Mark cannot be empty!",
        },
      },
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Model cannot be null!",
        },
        notEmpty: {
          msg: "Model cannot be empty!",
        },
      },
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "year cannot be null!",
        },
        notEmpty: {
          msg: "year cannot be empty!",
        },
      },
    },

    price: {
      type: Sequelize.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "price cannot be null!",
        },
        notEmpty: {
          msg: "price cannot be empty!",
        },
      },
    },

    favourite: {
      type:Sequelize.BOOLEAN,
      allowNull: false,
    },

  }, {
      sequelize,
      timepstamps: false,
      createdAt: false,
      updatedAt: false
  });

  return Car;
};
