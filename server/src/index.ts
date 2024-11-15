import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import pdfRoutes from './routes/pdfRoutes';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/pdf', pdfRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});