import express from "express";
import authRoutes from "./v1/authRoutes.js";

const V1Router = express.Router();

V1Router.use('/auth', authRoutes);

export default V1Router;