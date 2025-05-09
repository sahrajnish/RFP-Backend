import express from "express";
import authRouter from "./src/routes/auth.routes.js";

const app = express();

const PORT = 8080;

app.use('/api/auth', authRouter);

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));