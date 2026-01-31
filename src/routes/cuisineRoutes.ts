import type { Request, Response } from 'express';
import Router from 'express';

const router = Router();

router.get('/cuisines', (req: Request, res: Response) => {
  res.json([{'id': '1', 'name': 'Italian'}, {'id': '2', 'name': 'Mexican'}, {'id': '3', 'name': 'Chinese'}]);
});

export default router;