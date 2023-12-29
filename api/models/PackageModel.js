const conn = require("../connect");
const { DataType, DataTypes} = require("sequelize");

const PackageModel = conn.define("packages", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIcrement: true,
  },
  name: {
    type: DataTypes.STRING(255),
  },
  bill_amount: {
    type: DataTypes.BIGINT,
  },
  price: {
    type: DataTypes.BIGINT,
  }
});

module.exports = PackageModel;
