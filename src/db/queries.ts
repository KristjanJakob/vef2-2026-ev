import pool from './pool.js';

export async function getPrograms() {
  const result = await pool.query('SELECT * FROM programs');
  return result.rows;
}

export async function insertResult(program: string) {
  await pool.query(
    'INSERT INTO quiz_results (top_program) VALUES ($1)',
    [program]
  );
}