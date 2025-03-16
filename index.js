import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectToDb, PORT } from './db.js';
import searchRoutes from './routes/searchRoutes.js';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, '../', 'public')));
app.use(express.json());
app.use(
  cors({
    origin: 'https://weather-app-frontend-rouge-three.vercel.app',
  }),
);



app.use('/api/search', searchRoutes);

// connectToDb()
//   .then(() => {
//     app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
//   })
//   .catch((err) => {
//     console.error('Failed to connect to the database', err);
//   });
await connectToDb();