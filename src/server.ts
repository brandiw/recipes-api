import express from 'express';
import type { Request, Response } from 'express';
import cors from 'cors';
import type { CorsOptions } from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Define allowed origins
const allowedOrigins = ['http://localhost:5173'];

const corsOptions: CorsOptions = {
  origin: (origin: string | undefined, callback: any) => {
    if (!origin) {
      callback(null, true); // Allow requests with no origin (like mobile apps or curl requests)
      return;
    }
    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
  credentials: true, // Allow cookies to be sent
  optionsSuccessStatus: 204 // Use 204 for preflight success status
};

app.use(cors(corsOptions));
app.use('/api', userRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Swirled!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});