import UserInterface from "../interfaces/User.interface";
import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export async function createUser(userData: UserInterface): Promise<UserInterface> {
    try {
        const { name, email } = userData;
        // console.log(`name = ${name}, email= ${email}`)
        // Check if required properties are present in the request body
        if (!name || !email) {
            throw new Error("Name and email are required fields");
        }

        let user: UserInterface;

        user = {
            name: name,
            email: email,
        };

        const createUser = await prisma.user.create({ data: user });
        return createUser;
    } catch (error) {
        if (
            error instanceof Prisma.PrismaClientKnownRequestError &&
            error.code === "P2002"
        ) {
            // Unique constraint violation (email already exists)
            throw new Error("Email address already exists");
        } else {
            // Other errors
            console.error("Error creating user:", error);
            throw new Error("Failed to create user");
        }
        throw error;
    } finally {
        await prisma.$disconnect();
    }
}

// static getUser(req: Request, res: Response) {
//     const userId = parseInt(req.params.userId);
//     const user = UserModal.users.find((user) => user.id === userId);
//     if (!user) {
//         res.status(404).json({ message: "User not found" });
//     } else {
//         res.json(user);
//     }
// }

// static updateUser(req: Request, res: Response) {
//     const userId = parseInt(req.params.userId);
//     const { name, email } = req.body;
//     const user = UserModal.users.find((user) => user.id === userId);
//     if (!user) {
//         res.status(404).json({ message: "User not found" });
//     } else {
//         user.name = name;
//         user.email = email;
//         res.json(user);
//     }
// }

// static deleteUser(req: Request, res: Response) {
//     const userId = parseInt(req.params.userId);
//     const index = UserModal.users.findIndex((user) => user.id === userId);
//     if (index === -1) {
//         res.status(404).json({ message: "User not found" });
//     } else {
//         UserModal.users.splice(index, 1);
//         res.json({ message: "User deleted successfully" });
//     }
// }

