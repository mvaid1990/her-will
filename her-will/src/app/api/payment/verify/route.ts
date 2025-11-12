import { NextResponse } from 'next/server';
import crypto from 'crypto';
import pool from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      planId,
    } = body;

    // Verify signature
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    const expectedSign = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET || '')
      .update(sign.toString())
      .digest('hex');

    if (razorpay_signature === expectedSign) {
      // Payment is verified, create subscription in database
      const result = await pool.query(
        `INSERT INTO subscriptions (user_id, plan_id, start_date, end_date, status, payment_status, payment_id, amount)
         SELECT $1, $2, NOW(), NOW() + INTERVAL '1 month' * (duration_days / 30), 'active', 'paid', $3, $4
         FROM plans WHERE id = $2
         RETURNING *`,
        [userId, planId, razorpay_payment_id, body.amount]
      );

      return NextResponse.json({
        success: true,
        message: 'Payment verified successfully',
        subscription: result.rows[0],
      });
    } else {
      return NextResponse.json(
        { success: false, message: 'Invalid signature' },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error('Error verifying payment:', error);
    return NextResponse.json(
      { error: 'Payment verification failed', details: error.message },
      { status: 500 }
    );
  }
}
