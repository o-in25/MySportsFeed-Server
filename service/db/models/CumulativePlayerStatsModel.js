let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let SchemaManager = require('./schemas/SchemaManager');
module.exports = {
  CumulativePlayerStatsModel: function(collection) {
      return mongoose.model(collection, new Schema(SchemaManager.PlayerStatsManager.PlayerStatsSchema));
  }
};