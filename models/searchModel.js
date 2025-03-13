import mongoose from 'mongoose'

const Schema = mongoose.Schema

const searchSchema = new Schema({
  selectedCity: {
    type: String,
    required: true,
  },
  searchDate: {
    type: Date,
    default: Date.now,
  },
  views: {
    type: Number,
    default: 0,
  },
})

export default mongoose.model('Search', searchSchema)
