import express from "express";
//config engine ejs
import configViewEngine from "./config/Viewengine";
//config routes
import initWebRoute from "./routes/web";
import initAPIRoute from "./routes/api";
//connect database
// import connection from "./config/connectDB";
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

//cấu hình để express post được request từ client lên server,
//giản lược hóa dữ liệu gửi lên server
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
//set up view engine
configViewEngine(app);
//set up web routes
initWebRoute(app);
//init api routes
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

//ejs giống handlebar là cái để hiển thị view ở nodejs
//nodemon giúp refresh lại trang mà k cần chạy lại câu lệnh
//body-parser https://topdev.vn/blog/bodyparser-trong-express-js/
//dotenv để dùng đc file môi trường .env
//test github