const express = require("express");
const MyController = require("../controller/userController")
const UserApiRouter = express.Router()

UserApiRouter.post("/adduser",MyController.AddUser)
UserApiRouter.put("/edituser/:id",MyController.UpdateUser)
UserApiRouter.get("/getuser",MyController.GetUser)
UserApiRouter.delete("/deluser",MyController.deleteUser)

module.exports= UserApiRouter