import pool from "../config/connectDB";

let getHomepage = async(req, res) => {
    //logic ở đây
    const [rows, fields] = await pool.execute("SELECT * FROM `users` ");
    return res.render("index.ejs", { dataUser: rows });
};
let getDetailPage = async(req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute("SELECT * FROM `users` WHERE `id` = ?", [id]);
    return res.send(JSON.stringify(user));
};
let createNewUser = async(req, res) => {
    let { firstname, lastname, email, address } = req.body;
    await pool.execute(
        "INSERT INTO users (firstName, lastName,email,address) VALUES(?,?,?,?)", [firstname, lastname, email, address]
    );
    return res.redirect("/");
};
let deleteUser = async(req, res) => {
    let userId = req.body.userId;
    await pool.execute("DELETE FROM users WHERE id=?;", [userId]);
    return res.redirect("/");
};
let editUser = async(req, res) => {
    let id = req.params.id;
    let [user] = await pool.execute("SELECT * FROM users WHERE id=?;", [id]);

    return res.render("update.ejs", { dataUser: user[0] });
};
let updateUser = async(req, res) => {
    let { firstname, lastname, email, address, userId } = req.body;
    await pool.execute(
        "UPDATE users SET firstName = ?, lastName =?,email=?,address=? WHERE id=?;", [firstname, lastname, email, address, userId]
    );
    return res.redirect("/");
};
module.exports = {
    getHomepage,
    getDetailPage,
    createNewUser,
    deleteUser,
    editUser,
    updateUser,
};