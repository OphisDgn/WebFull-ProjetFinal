import { Request, Response } from 'express';

export default function TokenCheck(req: Request, res: Response, next: Function) {
    if(req.headers.authorization) {
        next();
    } else {
        res.status(400).json({ message: 'Token is not in the Authorization header.' });
    }
}