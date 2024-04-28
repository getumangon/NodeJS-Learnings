const { User } = require("../models/user");

const handleGetAllUsers = async (req, res) => {
  const allDBUsers = await User.find({});
  return res.json(allDBUsers);
};

const handleNewCreateUser = async (req, res) => {
  const userData = req.body;

  if (
    !userData ||
    !userData.first_name ||
    !userData.last_name ||
    !userData.email ||
    !userData.gender
  ) {
    return res.status(400).json({ msg: "All fields required!" });
  }
  const result = await User.create({
    firstName: userData.first_name,
    lastName: userData.last_name,
    email: userData.email,
    gender: userData.gender,
  });

  return res.status(201).json({ msg: `User created`, id: result.id });
};

const handleGetUserById = async (req, res) => {
  const params = req.params.id;
  const userDetail = await User.findById(params);

  if (!userDetail) {
    return res.status(404).send({ err: `User not found!` });
  }
  return res.status(200).json(userDetail);
};

const handleEditUserById = async (req, res) => {
  const body = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
  });

  return res.status(200).json({ status: "Success" });
};

const handleDeleteUserById = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  return res.status(200).json({ status: "Success" });
};

module.exports = {
  handleGetAllUsers,
  handleNewCreateUser,
  handleGetUserById,
  handleEditUserById,
  handleDeleteUserById,
};
