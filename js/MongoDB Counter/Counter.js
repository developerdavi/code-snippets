const mongoose = require('mongoose')

const CounterSchema = new mongoose.Schema({
  col: {
    type: String,
    required: true
  },
  counter: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('counter', CounterSchema)
