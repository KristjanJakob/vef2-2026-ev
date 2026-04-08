import express from 'express';
import { getPrograms, insertResult, getProgramWithSchools } from '../db/queries';
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
  

  const scores = calculateScores(interest, confidence, answer2, answer3);

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
  const schools = await getProgramWithSchools(title);

  if (!schools.length) {
    return res.render('program', { program: null });
  }

  const program = {
    title: schools[0].title,
    description: schools[0].description,
    schools: schools.map((s: any) => ({ name: s.school_name, link: s.link }))
  };

  res.render('program', { program });
});

export default router;