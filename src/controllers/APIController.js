import pool from "../config/connectDB";
let getAllUsers = async(req, res) => {
    //http
    //chuẩn format api json/xml=>object
    const [rows, fields] = await pool.execute("SELECT * FROM users");
    return res.status(200).json({ message: "ok", data: rows });
};
let createNewUser = async(req, res) => {
    let { firstname, lastname, email, address } = req.body;
    if (!firstname || !lastname || !email || !address) {
        return res.status(200).json({
            message: "missing required params",
        });
    }
    await pool.execute(
        "INSERT INTO users (firstName, lastName,email,address) VALUES(?,?,?,?)", [firstname, lastname, email, address]
    );
    return res.status(200).json({ message: "ok" });
};
let updateUser = async(req, res) => {
    let { firstname, lastname, email, address, userId } = req.body;
    if (!firstname || !lastname || !email || !address || !userId) {
        return res.status(200).json({
            message: "missing required params",
        });
    }
    await pool.execute(
        "UPDATE users SET firstName = ?, lastName =?,email=?,address=? WHERE id=?;", [firstname, lastname, email, address, userId]
    );
    return res.status(200).json({
        message: "ok",
    });
};
let deleteUser = async(req, res) => {
    let userId = req.params.userId;
    if (!userId) {
        return res.status(200).json({
            message: "missing required params",
        });
    }
    await pool.execute("DELETE FROM users WHERE id=?;", [userId]);
    return res.status(200).json({
        message: "ok",
    });
};
module.exports = { getAllUsers, createNewUser, updateUser, deleteUser };
//  api là công cụ giúp lấy dữ liệu từ database thông qua backend để dùng ở frontend.