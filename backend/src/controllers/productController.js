const mongoose = require('mongoose');
const Product = require('../models/Product');
const fallbackProducts = require('../data/seedData');

// Helper to filter and sort fallback products in memory
const filterAndSortFallback = (category, concern, sort) => {
  let list = [...fallbackProducts];

  if (category && category !== 'All') {
    list = list.filter(p => p.category.toLowerCase() === category.toLowerCase());
  }

  if (concern) {
    list = list.filter(p => p.targetConcerns?.some(c => c.toLowerCase().includes(concern.toLowerCase())));
  }

  if (sort === 'price_asc') {
    list.sort((a, b) => a.price - b.price);
  } else if (sort === 'price_desc') {
    list.sort((a, b) => b.price - a.price);
  } else if (sort === 'rating') {
    list.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return list;
};

// @desc   Get all products (with optional category, concern, sort filter)
// @route  GET /api/products
// @access Public
const getProducts = async (req, res) => {
  const { category, concern, sort } = req.query;

  try {
    if (mongoose.connection.readyState === 1) {
      let filter = {};

      if (category && category !== 'All') {
        filter.category = { $regex: new RegExp(`^${category}$`, 'i') };
      }
      if (concern) {
        filter.targetConcerns = { $in: [new RegExp(concern, 'i')] };
      }

      let sortOption = {};
      if (sort === 'price_asc') sortOption = { price: 1 };
      else if (sort === 'price_desc') sortOption = { price: -1 };
      else if (sort === 'rating') sortOption = { rating: -1 };
      else sortOption = { createdAt: -1 };

      const products = await Product.find(filter).sort(sortOption).maxTimeMS(4000);
      if (products && products.length > 0) {
        return res.status(200).json({ success: true, count: products.length, data: products, source: 'database' });
      }
    }
  } catch (error) {
    console.warn('DB query timed out or failed, falling back to local dataset:', error.message);
  }

  // Fallback to built-in catalog
  const filtered = filterAndSortFallback(category, concern, sort);
  return res.status(200).json({
    success: true,
    count: filtered.length,
    data: filtered,
    source: 'fallback'
  });
};

// @desc   Get single product by ID
// @route  GET /api/products/:id
// @access Public
const getProductById = async (req, res) => {
  const { id } = req.params;

  try {
    if (mongoose.connection.readyState === 1 && mongoose.isValidObjectId(id)) {
      const product = await Product.findById(id).maxTimeMS(4000);
      if (product) {
        return res.status(200).json({ success: true, data: product, source: 'database' });
      }
    }
  } catch (error) {
    console.warn('DB lookup failed, trying fallback:', error.message);
  }

  // Lookup in fallback products by _id or fallback string ID or index
  const product = fallbackProducts.find(p => p._id === id || p.name.toLowerCase() === id.toLowerCase()) 
    || fallbackProducts[parseInt(id, 10) - 1] 
    || fallbackProducts[0];

  if (product) {
    return res.status(200).json({ success: true, data: product, source: 'fallback' });
  }

  return res.status(404).json({ success: false, message: 'Product not found' });
};

// @desc   Create a new product (Admin)
// @route  POST /api/products
// @access Admin
const createProduct = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const product = await Product.create(req.body);
      return res.status(201).json({ success: true, data: product });
    }
    const newProduct = { _id: 'temp_' + Date.now(), ...req.body };
    fallbackProducts.push(newProduct);
    return res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc   Update a product (Admin)
// @route  PUT /api/products/:id
// @access Admin
const updateProduct = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1 && mongoose.isValidObjectId(req.params.id)) {
      const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
      });
      if (product) return res.status(200).json({ success: true, data: product });
    }
    const idx = fallbackProducts.findIndex(p => p._id === req.params.id);
    if (idx !== -1) {
      fallbackProducts[idx] = { ...fallbackProducts[idx], ...req.body };
      return res.status(200).json({ success: true, data: fallbackProducts[idx] });
    }
    return res.status(404).json({ success: false, message: 'Product not found' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// @desc   Delete a product (Admin)
// @route  DELETE /api/products/:id
// @access Admin
const deleteProduct = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1 && mongoose.isValidObjectId(req.params.id)) {
      await Product.findByIdAndDelete(req.params.id);
      return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    }
    const idx = fallbackProducts.findIndex(p => p._id === req.params.id);
    if (idx !== -1) {
      fallbackProducts.splice(idx, 1);
      return res.status(200).json({ success: true, message: 'Product deleted successfully' });
    }
    return res.status(404).json({ success: false, message: 'Product not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getProducts, getProductById, createProduct, updateProduct, deleteProduct };
