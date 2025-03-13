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
})

export default mongoose.model('Search', searchSchema)
