import mongoose from 'mongoose'
const Schema = mongoose.Schema

const House = new Schema(
  {
    levels: { type: Number, required: true, default: 0 },
    bedrooms: { type: Number, required: true, default: 0 },
    bathrooms: { type: Number, required: true, default: 0 },
    price: { type: Number, required: true, default: 0 },
    year: { type: Number, required: true, default: 0 },
    description: { type: String, default: 'No Description Provided' },
    imgUrl: { type: String, default: 'https://placehold.it/200x200' },
    pictures: [{ type: String }]
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default House
