require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('./src/models/Product');

const products = [
  {
    name: 'Daily Gentle Cleanser',
    brand: 'Nuvé',
    category: 'CLEANSER',
    description: 'Deep cleanses without drying out skin. Removes impurities, makeup, and excess oil while maintaining the skin\'s natural moisture barrier.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=800&auto=format&fit=crop',
    badge: 'Bestseller',
    targetConcerns: ['Acne & Blemishes', 'Sensitivity', 'Dryness'],
    rating: 4.8,
    numReviews: 1200,
    isFeatured: true,
    inStock: true
  },
  {
    name: 'Vitamin C Serum',
    brand: 'Nuvé',
    category: 'SERUM',
    description: 'Brightens skin & fades dark spots. Powered by 15% L-Ascorbic Acid for maximum brightening and antioxidant protection.',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=800&auto=format&fit=crop',
    badge: null,
    targetConcerns: ['Dark Spots', 'Uneven Tone', 'Anti-Aging'],
    rating: 4.9,
    numReviews: 980,
    isFeatured: true,
    inStock: true
  },
  {
    name: 'Niacinamide Toner',
    brand: 'Nuvé',
    category: 'TONER',
    description: 'Minimizes pores & controls oil. 10% Niacinamide formula reduces pore appearance and regulates sebum production.',
    price: 799,
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?q=80&w=800&auto=format&fit=crop',
    badge: null,
    targetConcerns: ['Acne & Blemishes', 'Uneven Tone'],
    rating: 4.7,
    numReviews: 850,
    isFeatured: false,
    inStock: true
  },
  {
    name: 'Hydrating Moisturizer',
    brand: 'Nuvé',
    category: 'MOISTURIZER',
    description: 'Intense hydration & skin barrier support. Hyaluronic Acid and Ceramides restore and protect the skin\'s moisture barrier.',
    price: 899,
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=800&auto=format&fit=crop',
    badge: null,
    targetConcerns: ['Dryness', 'Sensitivity'],
    rating: 4.8,
    numReviews: 1100,
    isFeatured: true,
    inStock: true
  },
  {
    name: 'Retinol Serum',
    brand: 'Nuvé',
    category: 'SERUM',
    description: 'Reduces fine lines & boosts collagen. Encapsulated Retinol for effective anti-aging with minimal irritation.',
    price: 1499,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?q=80&w=800&auto=format&fit=crop',
    badge: 'New',
    targetConcerns: ['Anti-Aging', 'Uneven Tone'],
    rating: 4.7,
    numReviews: 760,
    isFeatured: false,
    inStock: true
  },
  {
    name: 'Sunscreen SPF 50+',
    brand: 'Nuvé',
    category: 'SUNSCREEN',
    description: 'Broad spectrum protection UVA & UVB. Lightweight, non-greasy formula that doubles as a primer.',
    price: 699,
    image: 'https://images.unsplash.com/photo-1617897903246-719242758050?q=80&w=800&auto=format&fit=crop',
    badge: null,
    targetConcerns: ['Anti-Aging', 'Dark Spots', 'Sensitivity'],
    rating: 4.8,
    numReviews: 1300,
    isFeatured: false,
    inStock: true
  },
  {
    name: 'BHA 2% Exfoliant',
    brand: 'Nuvé',
    category: 'TREATMENT',
    description: 'Unclogs pores & improves texture. Salicylic Acid penetrates deep into pores to dissolve blackheads and blemishes.',
    price: 999,
    image: 'https://images.unsplash.com/photo-1612817288484-6f916006741a?q=80&w=800&auto=format&fit=crop',
    badge: null,
    targetConcerns: ['Acne & Blemishes', 'Dark Spots'],
    rating: 4.6,
    numReviews: 670,
    isFeatured: false,
    inStock: true
  },
  {
    name: 'Clay Detox Mask',
    brand: 'Nuvé',
    category: 'MASK',
    description: 'Detoxifies & clarifies blemish-prone skin. Kaolin and Bentonite clay draw out impurities for a deep cleanse.',
    price: 599,
    image: 'https://images.unsplash.com/photo-1608248593842-8021c640e70e?q=80&w=800&auto=format&fit=crop',
    badge: null,
    targetConcerns: ['Acne & Blemishes', 'Uneven Tone'],
    rating: 4.7,
    numReviews: 540,
    isFeatured: false,
    inStock: true
  }
];

const seedProducts = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding...');

    // Clear existing products
    await Product.deleteMany({});
    console.log('Existing products cleared.');

    // Insert new products
    const inserted = await Product.insertMany(products);
    console.log(`✅ Successfully seeded ${inserted.length} products to MongoDB!`);

    mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Seeding failed:', error.message);
    process.exit(1);
  }
};

seedProducts();
