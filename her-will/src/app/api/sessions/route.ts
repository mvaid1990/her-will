import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM sessions WHERE session_date >= NOW() ORDER BY session_date ASC LIMIT 20'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching sessions:', error);
    return NextResponse.json({ error: 'Failed to fetch sessions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, session_date, duration_minutes, instructor_name, session_type, max_participants, is_live, video_url } = body;
    
    const result = await pool.query(
      'INSERT INTO sessions (title, description, session_date, duration_minutes, instructor_name, session_type, max_participants, is_live, video_url) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *',
      [title, description, session_date, duration_minutes, instructor_name, session_type, max_participants, is_live, video_url]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating session:', error);
    return NextResponse.json({ error: 'Failed to create session' }, { status: 500 });
  }
}
