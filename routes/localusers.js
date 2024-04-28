const express = require("express");

const {
  handleGetAllUsers,
  handleNewCreateUser,
  handleGetUserById,
  handleEditUserById,
  handleDeleteUserById,
} = require("../controllers/localusersController");

const localUserRouter = express.Router();

// ROUTES ------ LOCAL FILE OPERATIONS -------------

localUserRouter.get("/", handleGetAllUsers);

// CREATE user Detail
localUserRouter.post("/", handleNewCreateUser);

// GET EDIT DELETE user
localUserRouter
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleEditUserById)
  .delete(handleDeleteUserById);

module.exports = localUserRouter;
