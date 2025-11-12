import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT * FROM plans WHERE is_active = true ORDER BY price ASC'
    );
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching plans:', error);
    return NextResponse.json({ error: 'Failed to fetch plans' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, price, duration_days, description, features } = body;
    
    const result = await pool.query(
      'INSERT INTO plans (name, price, duration_days, description, features) VALUES ($1, $2, $3, $4, $5) RETURNING *',
      [name, price, duration_days, description, JSON.stringify(features)]
    );
    
    return NextResponse.json(result.rows[0], { status: 201 });
  } catch (error) {
    console.error('Error creating plan:', error);
    return NextResponse.json({ error: 'Failed to create plan' }, { status: 500 });
  }
}
