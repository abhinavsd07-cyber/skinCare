const mongoose = require('mongoose');

const analysisSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  imageUrl: { type: String },
  overallScore: { type: Number, required: true },
  metrics: {
    hydration: { type: Number, required: true },
    elasticity: { type: Number, required: true },
    pores: { type: Number, required: true },
    texture: { type: Number, required: true },
    radiance: { type: Number, required: true }
  },
  concerns: [{
    name: { type: String },
    score: { type: Number },
    severity: { type: String }
  }]
}, { timestamps: true });

module.exports = mongoose.model('Analysis', analysisSchema);
