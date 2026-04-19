import express from 'express';
import { getPrograms, insertResult } from '../db/queries';
import { calculateScores } from '../services/scoring';

const router = express.Router();

type Program = {
  id: number;
  title: string;
  description: string;
  trait: string;
  school: string;
  link: string;
}

router.get('/', (req, res) => {
  res.render('quiz');
});

router.post('/', async (req, res) => {
  const interest = String(req.body.interest);
  const confidence = Number(req.body.confidence ?? 5);
  const answer2 = String(req.body.answer2 ?? '');
  const answer3 = String(req.body.answer3 ?? '');
  const answer4 = String(req.body.answer4 ?? '');
  const answer5 = String(req.body.answer5 ?? '');
  const answer6 = String(req.body.answer6 ?? '');
  

  const scores = calculateScores(interest, confidence, answer2, answer3, answer4, answer5, answer6);
  
  const programs = (await getPrograms()) as Program[];

  const results = programs.map((p) => {
    const score = scores[p.trait as keyof typeof scores] || 0;
    return {
      ...p,
      score
    };
  });

  results.sort((a, b) => b.score - a.score);

  const topResults = results.slice(0, 3);

  if (topResults.length > 0) {
    await insertResult(topResults[0].title);
  }

  res.render('result', { programs: topResults });
});

router.get('/program/:title', async (req, res) => {
  const title = req.params.title;

  const programs = (await getPrograms()) as Program[];
  const program = programs.find((p) => p.title === title);

  res.render('program', { program });
});

export default router;