import express from "express";
import APIController from "../controllers/APIController";

let router = express.Router();

const initAPIRoute = (app) => {
    router.get("/users", APIController.getAllUsers); //method GET->READ data
    router.post("/create-user", APIController.createNewUser); //method POST->CREATE data
    router.put("/update-user", APIController.updateUser); //method PUT->UPDATE data
    router.delete("/delete-user/:userId", APIController.deleteUser); //method DELETE->DELETE data
    return app.use("/api/v1/", router);
};
module.exports = initAPIRoute;