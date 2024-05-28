const router = require('express').Router();
const {
  getProducts,
  getSingleProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../../controllers/productController.js');

// /api/Products
router.route('/').get(getProducts).post(createProduct);

// /api/Products/:ProductId
router
  .route('/:productId')
  .get(getSingleProduct)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;