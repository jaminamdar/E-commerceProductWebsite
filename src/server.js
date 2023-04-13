import express from "express";
import { productRoute } from "./product.routes.js";

const app = express();

app.use(express.json());

app.use("/products", productRoute);

app.listen(8080,() => console.log("server is running on prt 8080"));
