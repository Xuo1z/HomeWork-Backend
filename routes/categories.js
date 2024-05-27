 
  const categoriesRouter = require('express').Router();
  
  const { findAllCategories, createCategory, deleteCategory, findCategoryById, updateCategory, checkEmptyName, checkIsCategoryExists } = require('../middlewares/categories');
  const {sendAllCategories, sendCategoryCreated, sendCategoryDeleted, sendCategoryUpdated} = require('../controllers/categories');
const { checkAuth } = require('../middlewares/auth');
  
  categoriesRouter.get('/categories', findAllCategories, sendAllCategories);
  categoriesRouter.post('/categories', findAllCategories, checkIsCategoryExists, checkEmptyName, checkAuth, createCategory, sendCategoryCreated);
  categoriesRouter.delete('/categories/:id', deleteCategory, checkAuth, sendCategoryDeleted);
  categoriesRouter.put('/categories/:id', findCategoryById, checkEmptyName, checkAuth, updateCategory, sendCategoryUpdated);

  module.exports = categoriesRouter;
  