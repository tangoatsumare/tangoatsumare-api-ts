import express from "express";
const app = express();
const foodController = require("../controllers/food");

app.get("/api/foods", foodController.getFoods);

app.get("/api/foods/:idOrName", foodController.getFood);

app.patch("/api/foods/:idOrName", foodController.patchFood);

app.delete("/api/foods/:idOrName", foodController.deleteFood);

app.post("/api/foods", foodController.postFood);

module.exports = app;
