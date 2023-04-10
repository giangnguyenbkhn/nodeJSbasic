import express from "express";
const configViewEngine = (app) => {
    //noi cong khai file
    app.use(express.static("./src/public"));
    //set up file engine la ejs
    app.set("view engine", "ejs"),
        //tat ca cac file ejs se phai nam trong thu muc views vi thang server js se tim den no
        app.set("views", "./src/views");
};
export default configViewEngine;