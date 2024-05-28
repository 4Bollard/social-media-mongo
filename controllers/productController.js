const { Product } = require('../models');

module.exports = {
  // Get all courses
  async getProducts(req, res) {
    try {
      const products = await Product.find()
      res.json(products);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Get a Product
  async getSingleProduct(req, res) {
    try {
      const product = await Product.findOne({ _id: req.params.productId })


      if (!product) {
        return res.status(404).json({ message: 'No Product with that ID' });
      }

      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Create a Product
  async createProduct(req, res) {
    try {
      const product = await Product.create(req.body);
      res.json(product);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Delete a Product
  async deleteProduct(req, res) {
    try {
      const product = await Product.findOneAndDelete({ _id: req.params.productId });

      if (!product) {
        res.status(404).json({ message: 'No Product with that ID' });
      }

      res.json({ message: 'Product deleted!' });
    } catch (err) {
      res.status(500).json(err);
    }
  },
  // Update a Product
  async updateProduct(req, res) {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: req.params.productId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!product) {
        res.status(404).json({ message: 'No Product with this id!' });
      }

      res.json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  },
};
