const mongoose = require('mongoose');

let isConnected = false;

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.warn('⚠️ MONGODB_URI is not set in environment. Running with in-memory fallback catalog.');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    isConnected = true;
    console.log(`✅ MongoDB Connected successfully: ${conn.connection.host}`);

    // Check if products collection is empty; if so, auto-seed default products
    try {
      const Product = require('../models/Product');
      const count = await Product.countDocuments();
      if (count === 0) {
        const seedProducts = require('../data/seedData');
        await Product.insertMany(seedProducts);
        console.log(`🌱 Auto-seeded ${seedProducts.length} default products into MongoDB.`);
      }
    } catch (seedErr) {
      console.warn('Could not auto-seed products:', seedErr.message);
    }
  } catch (error) {
    isConnected = false;
    console.warn('⚠️ MongoDB Atlas Connection Notice:');
    console.warn(`   Reason: ${error.message}`);
    console.warn('   The server will continue operating in high-availability mode with built-in catalog data.');
    console.warn('   (To connect to Atlas, whitelist your current IP address in MongoDB Atlas Network Access)');
  }
};

const getStatus = () => isConnected;

module.exports = connectDB;
module.exports.getStatus = getStatus;
