const users = require("../MOCK_DATA.json");
const fs = require("fs");

async function handleGetAllUsers(req, res) {
  return res.json(users);
}

const handleNewCreateUser = async (req, res) => {
  const userData = { ...req.body, id: users.length + 1 };
  users.push(userData);
  fs.writeFile("../MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(200).json({ msg: `User created ID: ${users.length}` });
  });
};

const handleGetUserById = async (req, res) => {
  const params = Number(req.params.id);
  const userDetail = users.find((user) => user.id === params);

  if (!userDetail) {
    return res.status(404).send({ err: `User not found!` });
  }
  return res.status(200).json(userDetail);
};

const handleEditUserById = async (req, res) => {
  return res.status(200).json({ status: "Pending" });
};

const handleDeleteUserById = async (req, res) => {
  return res.status(200).json({ status: "Pending" });
};

module.exports = {
  handleGetAllUsers,
  handleNewCreateUser,
  handleGetUserById,
  handleEditUserById,
  handleDeleteUserById,
};
