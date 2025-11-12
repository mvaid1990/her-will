import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;
    
    const result = await pool.query(
      'INSERT INTO contact_submissions (name, email, phone, subject, message) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, email, phone, subject, message]
    );
    
    return NextResponse.json({ 
      success: true, 
      message: 'Thank you for contacting us! We will get back to you soon.',
      data: result.rows[0] 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating contact submission:', error);
    return NextResponse.json({ error: 'Failed to submit contact form' }, { status: 500 });
  }
}
