import express from 'express';
import type { Request, Response } from 'express';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Swirled!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});