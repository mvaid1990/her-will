import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM testimonials WHERE is_approved = true ORDER BY created_at DESC LIMIT 10'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { user_id, name, content, rating, weight_lost } = body;
    
    const result = await pool.query(
      'INSERT INTO testimonials (user_id, name, content, rating, weight_lost) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [user_id, name, content, rating, weight_lost]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating testimonial:', error);
    return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
  }
}
