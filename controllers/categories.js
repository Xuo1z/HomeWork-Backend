const sendAllCategories = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(req.categoriesArray));
};

const sendCategoryCreated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const sendCategoryDeleted = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(req.category));
};

const sendCategoryUpdated = (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.end("Категория  обновлена!");
};

module.exports = {
  sendAllCategories,
   sendCategoryCreated,
   sendCategoryDeleted,
  sendCategoryUpdated,
 };
