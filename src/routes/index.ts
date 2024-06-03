import express, { Request, Response, Router } from 'express';
import * as UserController from '../controller/UserController';
import { myMiddleware } from '../middleware'; // Assuming your middleware file is named 'middleware.ts'
const routers:Router = express.Router();

routers.post("/createuser",UserController.createUserHandler);
routers.get("/sample",(req:Request, res:Response)=>{
    console.log("someone calling api")
    res.json({name:"tester1"})
})
export default routers;
