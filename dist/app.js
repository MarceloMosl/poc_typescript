import express, { json } from "express";
import { getReceitas } from "./controllers/userController.js";
import { insertReceita } from "./controllers/userController.js";
var app = express();
app.use(json());
app.get("/receitas", getReceitas);
app.post("/receitas", insertReceita);
app.listen(4000, function () {
    console.log("SERVER ON PORT 4000...");
});
