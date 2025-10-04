// const mongoose = require('mongoose');

// const CarSchema = new mongoose.Schema({
//   model: { type: String, required: true },
//   rentPrice: { type: Number, required: true },
//   available: { type: Boolean, default: true }
// }, { timestamps: true });

// module.exports = mongoose.model('Car', CarSchema);


const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  model: { type: String, required: true },
  description: { type: String },
  rentPrice: { type: Number, required: true },
  image: { type: String },          // image filename in /frontend/src/assets
  available: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Car', carSchema);
