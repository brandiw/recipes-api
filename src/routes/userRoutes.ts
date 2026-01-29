import type { Request, Response } from 'express';
import Router from 'express';

const router = Router();

router.get('/users/:id', (req: Request, res: Response) => {
  res.json({'id': '123', 'firstName': 'John', 'lastName': 'Doe', 'email': 'test@gmail.com'});
});

export default router;