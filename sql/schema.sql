CREATE TABLE programs (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  trait TEXT NOT NULL
);

CREATE TABLE quiz_results (
  id SERIAL PRIMARY KEY,
  created_at TIMESTAMP DEFAULT NOW(),
  top_program TEXT
);

CREATE TABLE program_schools (
  id SERIAL PRIMARY KEY,
  program_id INTEGER NOT NULL REFERENCES programs(id) ON DELETE CASCADE,
  school_name TEXT NOT NULL,
  link TEXT NOT NULL
);