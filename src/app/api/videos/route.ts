import { NextResponse } from "next/server"
import { sql } from "@/lib/db"

export async function GET() {
  try {
    const videos = await sql`
      SELECT id, title, youtube_url as "youtubeUrl", tecnica, ideal_para as "idealPara", colores
      FROM videos
      ORDER BY created_at DESC
    `
    return NextResponse.json(videos)
  } catch (error) {
    console.error('Error fetching videos:', error)
    return NextResponse.json({ error: 'Error fetching videos' }, { status: 500 })
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { title, youtubeUrl, tecnica, idealPara, colores } = body
    
    const result = await sql`
      INSERT INTO videos (id, title, youtube_url, tecnica, ideal_para, colores)
      VALUES (${Date.now().toString()}, ${title}, ${youtubeUrl}, ${tecnica}, ${idealPara}, ${colores})
      RETURNING *
    `
    
    return NextResponse.json(result[0])
  } catch (error) {
    console.error('Error creating video:', error)
    return NextResponse.json({ error: 'Error creating video' }, { status: 500 })
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json()
    
    await sql`DELETE FROM videos WHERE id = ${id}`
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting video:', error)
    return NextResponse.json({ error: 'Error deleting video' }, { status: 500 })
  }
}