
//Setting up burgers table with sequelize.

module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    },
    date: {
    	type: DataTypes.DATE,
      defaultValue: sequelize.fn("NOW")
    }
  }, {
    timestamps: false
  });

  return Burger;
};



