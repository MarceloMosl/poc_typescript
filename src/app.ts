import express, { json } from "express";
import {
  deleteReceitas,
  getReceitas,
  insertReceita,
  updateReceitas,
} from "./controllers/userController.js";

const app = express();
app.use(json());

app.get("/receitas", getReceitas);
app.post("/receitas", insertReceita);
app.delete("/receitas/:id", deleteReceitas);
app.put("/receitas/:id", updateReceitas);

app.listen(4000, () => {
  console.log("SERVER ON PORT 4000...");
});
