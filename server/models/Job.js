import mongoose from 'mongoose'
const Schema = mongoose.Schema

const Job = new Schema(
  {
    position: { type: String, required: true, default: 0 },
    company: { type: String, required: true, default: 0 },
    pay: { type: Number, required: true, default: 0 },
    location: { type: String, required: true, default: 0 },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Job
