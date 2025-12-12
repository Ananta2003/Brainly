    import type { NextFunction, Response } from "express";
    import type { AuthenticatedRequest } from "./types/index.js";
    import dotenv from 'dotenv'
    import jwt from 'jsonwebtoken'

    dotenv.config()
    const JWT_PASSWORD: any = process.env.JWT_PASSWORD



    export function middleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {


        const authHeader = req.headers['authorization']

        if (!authHeader) {
            return res.json({
                message: "Please Provide Token"
            })
        }

        const token = authHeader.split(" ")[1]
        if (!token) {
            return res.status(401).json({ message: "Invalid authorization format" });
        }

        try {
            const decode = jwt.verify(
                token
                , JWT_PASSWORD) as any

            req.userId = decode.userId
            next();
        } catch (err) {
            return res.status(403).json({ message: "Invalid or expired token" });
        }
    }