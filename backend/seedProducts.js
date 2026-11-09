const dns = require('dns');
dns.setServers(['8.8.8.8', '1.1.1.1']);

require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');
const seedProducts = require('./src/data/seedData');

const runSeeder = async () => {
  const uri = process.env.MONGODB_URI;
  if (!uri) {
    console.error('❌ MONGODB_URI is not defined in backend/.env');
    process.exit(1);
  }

  console.log('🔄 Connecting to MongoDB for seeding...');
  try {
    await mongoose.connect(uri, {
      serverSelectionTimeoutMS: 10000,
    });
    console.log('✅ Connected to MongoDB successfully.');

    // Clear existing products
    const deleted = await Product.deleteMany({});
    console.log(`🧹 Cleared ${deleted.deletedCount} existing records from products collection.`);

    // Insert structured seed products
    const inserted = await Product.insertMany(seedProducts);
    console.log(`🎉 Successfully seeded ${inserted.length} skincare products to MongoDB!`);

    await mongoose.disconnect();
    console.log('🔒 Disconnected cleanly.');
    process.exit(0);
  } catch (error) {
    console.error('❌ Database Seeding Failed:');
    console.error(error.message);
    process.exit(1);
  }
};

runSeeder();
