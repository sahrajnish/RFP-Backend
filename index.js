import dotenv from "dotenv";
import express from "express";
import authRouter from "./src/routes/auth.routes.js";

dotenv.config({
    path: "./.env"
})

const app = express();

const PORT = process.env.PORT || 9000;

app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));