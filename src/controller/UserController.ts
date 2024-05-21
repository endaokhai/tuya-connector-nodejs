import UserInterface from "../interfaces/User.interface";
import * as UserModal from "../models/UserModal";
import { Request, Response } from "express";

export async function createUserHandler(
    req: Request<{}, {}, Omit<UserInterface, "id">>,
    res: Response
): Promise<void> {
    try {
        console.log(req.body)
        const userData = req.body;
        const newUser = await UserModal.createUser(userData);
        res.status(201).json(newUser);
    } catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ error: "Failed to create user" });
    }
}
