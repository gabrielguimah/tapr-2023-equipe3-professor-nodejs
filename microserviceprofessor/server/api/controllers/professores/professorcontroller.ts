import { Request, Response } from 'express';

export class ProfessorController {
    all(_: Request, res: Response): void {
        res.json([]);
    }
}

export default new ProfessorController();