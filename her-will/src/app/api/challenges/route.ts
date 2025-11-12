import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM challenges WHERE is_active = true AND end_date >= NOW() ORDER BY start_date ASC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching challenges:', error);
    return NextResponse.json({ error: 'Failed to fetch challenges' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { title, description, start_date, end_date, prize_amount, rules } = body;
    
    const result = await pool.query(
      'INSERT INTO challenges (title, description, start_date, end_date, prize_amount, rules) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [title, description, start_date, end_date, prize_amount, JSON.stringify(rules)]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating challenge:', error);
    return NextResponse.json({ error: 'Failed to create challenge' }, { status: 500 });
  }
}
