const usersRouter = require('express').Router();
  
  const { findAllUsers, createUser, deleteUser, findUserById, updateUser, checkEmptyNameAndEmailAndPassword, checkEmptyNameAndEmail, hashPassword, checkIsUserExists } = require('../middlewares/users');
  const {sendAllUsers, sendUserCreated, sendUserDeleted, sendUserUpdated, sendMe} = require('../controllers/users');
const { checkAuth } = require('../middlewares/auth');
  
  usersRouter.get('/users', findAllUsers, sendAllUsers);
  usersRouter.post('/users',findAllUsers,checkIsUserExists,checkEmptyNameAndEmailAndPassword, checkAuth, hashPassword, createUser, sendUserCreated);
  usersRouter.delete('/users/:id', deleteUser, checkAuth, sendUserDeleted);
  usersRouter.put('/users/:id', findUserById, checkEmptyNameAndEmail, checkAuth, updateUser, sendUserUpdated);
  usersRouter.get('/me', checkAuth, sendMe );

  module.exports = usersRouter;