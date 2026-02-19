import express from 'express';
import { getPrograms, insertResult } from '../db/queries';
import { calculateTrait } from '../services/scoring';

const router = express.Router();

type Program = {
    id: number;
    title: string;
    description: string;
    trait: string;
}

router.get('/', (req, res) => {
  res.render('quiz');
});

router.post('/', async (req, res) => {
  const interest = String(req.body.interest);
  const confidence = Number(req.body.confidence ?? 5);
  
  const trait = calculateTrait(interest, confidence);  

  const programs = (await getPrograms()) as Program[];
  const match = programs.find((p: Program) => p.trait === trait);

  if (match) {
    await insertResult(match.title);
  }

  res.render('result', { program: match });
});

export default router;