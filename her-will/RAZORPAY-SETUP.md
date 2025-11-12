# 💳 Razorpay Payment Integration Guide

## ✅ What's Been Integrated

I've successfully integrated **Razorpay**, India's leading payment gateway, into your HER-WILL fitness website!

### Features Added:
- ✅ Secure payment processing
- ✅ Support for UPI, Cards, Net Banking, Wallets
- ✅ Payment verification with signature validation
- ✅ Automatic subscription creation after successful payment
- ✅ Beautiful payment UI with Razorpay checkout
- ✅ Order tracking and receipt generation

## 🚀 Setup Instructions

### Step 1: Create Razorpay Account

1. Go to [https://razorpay.com](https://razorpay.com)
2. Click "Sign Up" and create a free account
3. Complete KYC verification (required for live payments)
4. You'll get **Test Mode** access immediately

### Step 2: Get API Keys

1. Login to Razorpay Dashboard
2. Go to **Settings** → **API Keys**
3. Click **Generate Test Keys** (for testing)
4. Copy your:
   - **Key ID** (starts with `rzp_test_`)
   - **Key Secret** (keep this secret!)

### Step 3: Add Keys to .env File

Edit your `.env` file and add:

```env
RAZORPAY_KEY_ID=rzp_test_YOUR_KEY_ID_HERE
RAZORPAY_KEY_SECRET=YOUR_KEY_SECRET_HERE
```

**Important:** Never commit `.env` file to Git!

### Step 4: Update Database Schema

Run this to add payment tracking columns:

```bash
psql -d herwill_db -c "ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS payment_id VARCHAR(255);"
psql -d herwill_db -c "ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS order_id VARCHAR(255);"
psql -d herwill_db -c "ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS amount DECIMAL(10, 2);"
psql -d herwill_db -c "ALTER TABLE subscriptions ADD COLUMN IF NOT EXISTS payment_method VARCHAR(50);"
```

Or drop and recreate:

```bash
psql -d herwill_db -f database/schema.sql
```

### Step 5: Test the Integration

```bash
npm run dev
```

Visit: http://localhost:3000/plans

Click any "Pay Now" button to test!

## 🧪 Test Mode

### Test Cards (No real money charged):

**Success:**
- Card: `4111 1111 1111 1111`
- CVV: Any 3 digits
- Expiry: Any future date

**Failure:**
- Card: `4000 0000 0000 0002`

### Test UPI:
- UPI ID: `success@razorpay`
- UPI ID (fail): `failure@razorpay`

## 📱 Payment Flow

1. **User clicks "Pay Now"** on Plans page
2. **Razorpay Checkout opens** with payment options
3. **User completes payment** (UPI/Card/NetBanking)
4. **Backend verifies** payment signature
5. **Subscription created** in database
6. **User redirected** to dashboard

## 🔒 Security Features

✅ **Signature Verification** - Prevents payment tampering
✅ **Server-side validation** - All checks on backend
✅ **Encrypted communication** - HTTPS required
✅ **Secret key protection** - Never exposed to frontend
✅ **Order ID tracking** - Unique for each transaction

## 📊 Files Created

### API Routes:
- `/api/payment/create-order/route.ts` - Creates Razorpay order
- `/api/payment/verify/route.ts` - Verifies payment signature

### Components:
- `/components/PaymentButton.tsx` - Reusable payment button

### Updated:
- `/app/plans/page.tsx` - Integrated payment buttons
- `/database/schema.sql` - Added payment columns

## 💰 Pricing

### Razorpay Charges:
- **2% + ₹0** per transaction (for most payment methods)
- **No setup fees**
- **No annual fees**
- **Instant settlements** available

### Your Plans:
- ₹99 Monthly Plan → You receive: ₹97.02
- ₹249 3-Month Plan → You receive: ₹244.02
- ₹449 6-Month Plan → You receive: ₹440.02
- ₹799 Annual Plan → You receive: ₹783.02

## 🎨 Customization

### Change Payment Button Style:

Edit `/components/PaymentButton.tsx`:

```tsx
theme: {
  color: '#FF6B9D', // Your brand color
}
```

### Add More Payment Options:

In Razorpay Dashboard:
- Enable/disable payment methods
- Set minimum order amount
- Configure EMI options
- Add international cards

## 🔄 Going Live

### When Ready for Production:

1. **Complete KYC** in Razorpay Dashboard
2. **Generate Live Keys** (starts with `rzp_live_`)
3. **Update .env** with live keys:
   ```env
   RAZORPAY_KEY_ID=rzp_live_YOUR_LIVE_KEY
   RAZORPAY_KEY_SECRET=YOUR_LIVE_SECRET
   ```
4. **Test thoroughly** with small amounts
5. **Enable webhooks** for payment notifications

### Webhook Setup (Optional but Recommended):

1. Go to Razorpay Dashboard → **Webhooks**
2. Add webhook URL: `https://yourdomain.com/api/payment/webhook`
3. Select events: `payment.captured`, `payment.failed`
4. Get webhook secret and add to `.env`

## 📈 Monitoring

### Razorpay Dashboard Shows:
- ✅ All transactions
- ✅ Success/failure rates
- ✅ Settlement status
- ✅ Refund management
- ✅ Customer details
- ✅ Analytics & reports

## 🆘 Troubleshooting

### "Payment verification failed"
- Check if `RAZORPAY_KEY_SECRET` is correct
- Ensure signature validation logic is correct

### "Razorpay SDK failed to load"
- Check internet connection
- Verify script URL is accessible
- Check browser console for errors

### "Order creation failed"
- Verify API keys are set in `.env`
- Check Razorpay account is active
- Review server logs for errors

## 📞 Support

- **Razorpay Docs**: https://razorpay.com/docs
- **Support**: support@razorpay.com
- **Phone**: 1800-102-0480 (India)

## 🎉 You're All Set!

Your HER-WILL website now has:
- ✅ Professional payment gateway
- ✅ Secure transaction processing
- ✅ Multiple payment options
- ✅ Automatic subscription management
- ✅ Production-ready integration

**Start accepting payments and grow your fitness business!** 💪🇮🇳
