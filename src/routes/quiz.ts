import express from 'express';
import { getPrograms, insertResult } from '../db/queries.js';
import { calculateTrait } from '../services/scoring.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.render('quiz');
});

router.post('/', async (req, res) => {
  const trait = calculateTrait(req.body.interest);

  const programs = await getPrograms();
  const match = programs.find(p => p.trait === trait);

  if (match) {
    await insertResult(match.title);
  }

  res.render('result', { program: match });
});

export default router;