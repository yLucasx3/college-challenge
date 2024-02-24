import express, { Router } from "express";
import cors from "cors";
import studentRoutes from "./routes/student.routes";
import authenticationRoutes from "./routes/authentication.routes";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors());

const apiRouter = Router();

studentRoutes(apiRouter);
authenticationRoutes(apiRouter);

app.use("/api", apiRouter);

export { app };
