const users = require('../models/user');
const bcrypt = require ("bcryptjs");

const hashPassword = async (req, res, next) => {
  try {
    const salt = await bcrypt.genSalt(10);

    const hash = await bcrypt.hash(req.bod.password, salt);

    req.body.password = hash;
    next();
  } catch (error) {
    res.status(400).send({message:"Ошибка хеширования пароля"})
  }
}

const findAllUsers = async (req, res, next) => {
  console.log("GET /users")
  req.usersArray =await users.find({}, {pssword: 0});
  next();
};


const findUserById = async (req, res, next) => {
  console.log("GET /users");
  try{
  req.user = await users.findById(req.params.id);
  next();
  } catch (err) {
    res.status(404).send({message: "Users not found"});
  }
};

const createUser = async (req, res, next) => {
  console.log("POST /user");
  try { 
    console.log(req.body);
     req.user =  await users.create(req.body);
     next();
} catch (err) {
  res.status(400).send("Error creating user")
}
};

const deleteUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndDelete(req.params.id);
    next();
  } catch (error) {
    res.status(400).send("Error delete user");
  }
};

const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body);
    next();
  } catch (error) {
    res.status(404).send({message: "Error for update user"});
  }
};

const checkEmptyNameAndEmailAndPassword = async (req, res, next) => {
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password
  ) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
  } else {
    next();
  }
}; 

const checkEmptyNameAndEmail = async (req, res, next) => {
  if (
    !req.body.username ||
    !req.body.email
  ) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Заполни все поля" }));
  } else {
    next();
  }
}; 

const checkIsUserExists = async (req, res, next) => {
  const isInArray = req.users.Array.find((user) => {
    return req.body.title === user.title;
  });
  if (isInArray) {
    res.setHeader("Content-Type", "application/json");
        res.status(400).send(JSON.stringify({ message: "Пользователь с таким названием уже существует" }));
  } else {
    next();
  }
};

module.exports = {
  findAllUsers,
   findUserById,
    createUser,
    deleteUser,
    updateUser,
    checkEmptyNameAndEmailAndPassword,
    checkEmptyNameAndEmail,
    hashPassword,
    checkIsUserExists,
   };