const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, default: 'Nuvé' },
  category: { type: String, required: true }, // e.g. CLEANSER, SERUM, TONER, MOISTURIZER
  description: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String },
  badge: { type: String, default: null }, // e.g. "Bestseller", "New"
  ingredients: [String],
  targetConcerns: [String], // e.g. ["Acne & Blemishes", "Dark Spots"]
  rating: { type: Number, default: 0 },
  numReviews: { type: Number, default: 0 },
  isFeatured: { type: Boolean, default: false },
  inStock: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);
