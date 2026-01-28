import type { Request, Response } from 'express';
import Router from 'express';

const router = Router();

router.get('/users/:id', (req: Request, res: Response) => {
  res.json({'firstName': 'John', 'lastName': 'Doe', 'email': 'test@gmail.com'});
});

export default router;