import pool from './pool';

export async function getPrograms() {
  const result = await pool.query(
    'SELECT id, title, description, trait FROM programs'
  );
  return result.rows;
}

export async function insertResult(program: string) {
  await pool.query(
    'INSERT INTO quiz_results (top_program) VALUES ($1)',
    [program]
  );
}

export async function getProgramWithSchools(title: string) {
  const result = await pool.query(
    `SELECT p.id, p.title, p.description, p.trait,
            ps.school_name, ps.link
     FROM programs p
     LEFT JOIN program_schools ps ON ps.program_id = p.id
     WHERE p.title = $1`,
    [title]
  );
  return result.rows;
}