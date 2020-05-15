const { Router } = require("express");
const router = Router();

const {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
  validateLogin,
} = require("../controller/users.controller");

router.route("/").get(getUsers).post(createUser);

router.route("/:id").delete(deleteUser).put(updateUser);

router.route("/login").post(validateLogin);

module.exports = router;
