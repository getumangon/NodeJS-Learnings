const express = require("express");
const { User } = require("../models/user");
const { handleNewCreateUser, handleGetUserById, handleEditUserById, handleDeleteUserById, handleGetAllUsers } = require("../controllers/mongousersController");

const mongoUsersRouter = express.Router();
// ----------------------------------------------------------------------------------------------------
// --------- ROUTES ------ mongoDB OPERATIONS -------------

// GET all users
// router.get("/", async (req, res) => {
//   const allDBUsers = await User.find({});
//   const userHTML = `
//           <ul>
//           ${allDBUsers.map((user) => `<li>${user.firstName}</li>`).join("")}
//           </ul>`;
//   return res.send(userHTML);
// });

mongoUsersRouter.get("/", handleGetAllUsers);

// CREATE user Detail
mongoUsersRouter.post("/", handleNewCreateUser);

// GET EDIT DELETE user
mongoUsersRouter
  .route("/:id")
  .get(handleGetUserById)
  .patch(handleEditUserById)
  .delete(handleDeleteUserById);

module.exports = mongoUsersRouter;
