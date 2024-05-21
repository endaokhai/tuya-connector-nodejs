import { Request, Response, NextFunction } from 'express';

export const myMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  // Middleware logic
  next(); // Call next to pass control to the next middleware in the stack
};