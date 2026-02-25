import { sql } from '../src/lib/db';
import { readFileSync } from 'fs';
import path from 'path';

async function runMigration() {
  try {
    console.log('Ejecutando migración...');
    
    // Crear la tabla directamente
    await sql`
      CREATE TABLE IF NOT EXISTS videos (
        id TEXT PRIMARY KEY,
        title TEXT NOT NULL,
        youtube_url TEXT NOT NULL,
        tecnica TEXT,
        ideal_para TEXT,
        colores TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('✅ Tabla videos creada exitosamente');
    
    // Migrar datos existentes
    const videosPath = path.join(__dirname, '../src/data/videos.json');
    const videos = JSON.parse(readFileSync(videosPath, 'utf8'));
    
    for (const video of videos) {
      await sql`
        INSERT INTO videos (id, title, youtube_url, tecnica, ideal_para, colores)
        VALUES (${video.id}, ${video.title}, ${video.youtubeUrl}, ${video.tecnica}, ${video.idealPara}, ${video.colores})
        ON CONFLICT (id) DO NOTHING
      `;
    }
    
    console.log(`✅ ${videos.length} videos migrados exitosamente`);
    
  } catch (error) {
    console.error('❌ Error en la migración:', error);
    process.exit(1);
  }
}

runMigration();
