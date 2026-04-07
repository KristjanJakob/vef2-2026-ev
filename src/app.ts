import dotenv from 'dotenv';
import path from 'path';

dotenv.config({path: path.resolve(process.cwd(), '.env')});

import express from 'express';
import quizRouter from './routes/quiz';
import indexRouter from './routes/index';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/quiz', quizRouter);

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});