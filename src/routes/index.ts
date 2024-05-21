import express, { Request, Response, Router } from 'express';
import * as UserController from '../controller/UserController';
import { myMiddleware } from '../middleware'; // Assuming your middleware file is named 'middleware.ts'

const routers:Router = express.Router();

routers.post("/createuser",UserController.createUserHandler);

export default routers;
