const router = require('express').Router();

const {
    getUsers,
    getSpecificUser,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
  } = require('../../controllers/userController');

  