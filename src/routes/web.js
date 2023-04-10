import express from "express";
import {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    updateUser,
} from "../controllers/homeController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", getHomepage);
    //route parameters
    router.get("/detail/user/:id", getDetailPage);
    //route post dữ liệu lên database
    router.post("/create-new-user", createNewUser);
    router.post("/delete-user", deleteUser);
    router.get("/edit-user/:id", editUser);
    router.post("/update-user", updateUser);
    router.get("/about", (req, res) => {
        res.send("about page");
    });

    // tien to cua cac router
    return app.use("/", router);
};
module.exports = initWebRoute;
// export default initWebRoute;