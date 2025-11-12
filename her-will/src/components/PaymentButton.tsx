'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';

interface PaymentButtonProps {
  planId: number;
  planName: string;
  amount: number;
  userId?: number;
  className?: string;
  children?: React.ReactNode;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function PaymentButton({
  planId,
  planName,
  amount,
  userId: propUserId,
  className,
  children,
}: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  
  // Use session user ID if available, otherwise use prop
  const userId = session?.user?.id || propUserId;

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    if (!session) {
      alert('Please sign in first!');
      window.location.href = '/auth/signin?callbackUrl=/plans';
      return;
    }
    
    if (!userId) {
      alert('User ID not found. Please try signing in again.');
      return;
    }

    setLoading(true);

    // Load Razorpay script
    const res = await loadRazorpayScript();
    if (!res) {
      alert('Razorpay SDK failed to load. Please check your internet connection.');
      setLoading(false);
      return;
    }

    try {
      // Create order
      const orderResponse = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount, planId, planName }),
      });

      const orderData = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(orderData.error || 'Failed to create order');
      }

      // Razorpay options
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        name: 'HER-WILL',
        description: `${planName} Subscription`,
        order_id: orderData.orderId,
        image: '/logo.svg',
        handler: async function (response: any) {
          try {
            // Verify payment
            const verifyResponse = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                userId,
                planId,
                amount,
              }),
            });

            const verifyData = await verifyResponse.json();

            if (verifyData.success) {
              alert('🎉 Payment Successful! Welcome to HER-WILL!');
              window.location.href = '/dashboard'; // Redirect to dashboard
            } else {
              alert('Payment verification failed. Please contact support.');
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed. Please contact support.');
          }
        },
        prefill: {
          name: '',
          email: '',
          contact: '',
        },
        theme: {
          color: '#FF6B9D',
        },
        modal: {
          ondismiss: function () {
            setLoading(false);
          },
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    } catch (error: any) {
      console.error('Payment error:', error);
      alert(error.message || 'Payment failed. Please try again.');
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handlePayment}
      disabled={loading}
      className={className}
      style={{
        position: 'relative',
        background: className?.includes('btn-primary') ? 'linear-gradient(135deg, #FF6B9D 0%, #FF1744 100%)' : 'transparent',
        border: className?.includes('btn-outline') ? '2px solid #FF6B9D' : 'none',
        color: className?.includes('btn-primary') ? 'white' : '#FF6B9D',
        borderRadius: '50px',
        fontWeight: '700',
        fontSize: '1.05rem',
        transition: 'all 0.3s ease',
        boxShadow: className?.includes('btn-primary') ? '0 4px 15px rgba(255, 107, 157, 0.4)' : 'none',
      }}
    >
      {loading ? (
        <>
          <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
          Processing...
        </>
      ) : (
        children || 'Pay Now'
      )}
    </button>
  );
}
