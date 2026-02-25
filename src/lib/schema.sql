CREATE TABLE IF NOT EXISTS videos (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  youtube_url TEXT NOT NULL,
  tecnica TEXT,
  ideal_para TEXT,
  colores TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
