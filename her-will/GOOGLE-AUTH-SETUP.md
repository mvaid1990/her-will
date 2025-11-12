# 🔐 Google Sign-In Integration Guide

## ✅ What's Been Integrated

I've successfully integrated **Google OAuth Sign-In** with NextAuth.js into your HER-WILL fitness website!

### Features Added:
- ✅ Google Sign-In with Gmail
- ✅ Automatic user creation in database
- ✅ Session management
- ✅ User profile with avatar
- ✅ Track who signed in and made payments
- ✅ Beautiful sign-in page
- ✅ User menu with dropdown
- ✅ Secure authentication

## 🚀 Setup Instructions

### Step 1: Create Google OAuth Credentials

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google+ API**:
   - Go to "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click "Enable"

4. Create OAuth 2.0 Credentials:
   - Go to "APIs & Services" → "Credentials"
   - Click "Create Credentials" → "OAuth client ID"
   - Choose "Web application"
   - Add authorized redirect URIs:
     ```
     http://localhost:3000/api/auth/callback/google
     https://yourdomain.com/api/auth/callback/google
     ```
   - Click "Create"
   - Copy **Client ID** and **Client Secret**

### Step 2: Generate NextAuth Secret

Run this command to generate a secure secret:

```bash
openssl rand -base64 32
```

Copy the output.

### Step 3: Add to .env File

```env
# NextAuth (Google OAuth)
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=paste_your_generated_secret_here
GOOGLE_CLIENT_ID=your_google_client_id.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

### Step 4: Restart Server

```bash
npm run dev
```

## 🎯 How It Works

### Sign In Flow:
1. User clicks "Sign In" button
2. Redirected to Google OAuth consent screen
3. User authorizes with Gmail
4. Google redirects back to your site
5. User automatically created/updated in database
6. Session created with user info
7. User can now make payments

### User Tracking:
- Every sign-in is logged
- User ID linked to payments
- Email stored in database
- Profile picture from Google
- Last login timestamp

## 📱 Features

### User Menu (Top Right):
- User avatar/initial
- Name display
- Dropdown menu with:
  - 📊 Dashboard
  - 👤 Profile
  - 💳 My Subscriptions
  - 🚪 Sign Out

### Sign-In Page (`/auth/signin`):
- Beautiful gradient design
- Google Sign-In button
- Benefits list
- Privacy note
- Mobile responsive

### Protected Routes:
- Payment requires sign-in
- Automatic redirect to sign-in
- Return to original page after login

## 💾 Database Integration

### User Table Updates:
When user signs in:
1. Check if email exists
2. If new: Create user record
3. If existing: Update last login
4. Store: email, name, created_at, updated_at

### Payment Tracking:
```sql
SELECT u.name, u.email, s.amount, s.payment_id, s.created_at
FROM subscriptions s
JOIN users u ON s.user_id = u.id
WHERE s.payment_status = 'paid'
ORDER BY s.created_at DESC;
```

## 🔒 Security Features

✅ **OAuth 2.0** - Industry standard
✅ **JWT Sessions** - Secure token-based auth
✅ **CSRF Protection** - Built into NextAuth
✅ **Secure cookies** - HttpOnly, SameSite
✅ **Secret key** - Environment variable
✅ **HTTPS required** - For production

## 📊 User Data Collected

From Google:
- ✅ Email address
- ✅ Full name
- ✅ Profile picture
- ✅ Google ID (for verification)

Stored in Database:
- ✅ User ID (auto-generated)
- ✅ Email
- ✅ Name
- ✅ Phone (optional, from profile)
- ✅ Age (optional, from profile)
- ✅ Created at
- ✅ Updated at

## 🎨 Customization

### Change Sign-In Button Style:
Edit `/app/auth/signin/page.tsx`

### Add More OAuth Providers:
```tsx
// In /api/auth/[...nextauth]/route.ts
providers: [
  GoogleProvider({...}),
  FacebookProvider({...}),  // Add Facebook
  TwitterProvider({...}),   // Add Twitter
]
```

### Customize User Menu:
Edit `/components/UserMenu.tsx`

## 📈 Analytics & Tracking

### Track User Sign-Ins:
```sql
SELECT 
  DATE(created_at) as date,
  COUNT(*) as new_users
FROM users
GROUP BY DATE(created_at)
ORDER BY date DESC;
```

### Track Payments by User:
```sql
SELECT 
  u.name,
  u.email,
  COUNT(s.id) as total_subscriptions,
  SUM(s.amount) as total_revenue
FROM users u
LEFT JOIN subscriptions s ON u.id = s.user_id
WHERE s.payment_status = 'paid'
GROUP BY u.id, u.name, u.email
ORDER BY total_revenue DESC;
```

### Active Users:
```sql
SELECT COUNT(*) as active_users
FROM subscriptions
WHERE status = 'active'
AND end_date > NOW();
```

## 🔄 Session Management

### Check if User is Signed In:
```tsx
import { useSession } from 'next-auth/react';

function MyComponent() {
  const { data: session, status } = useSession();
  
  if (status === 'loading') return <div>Loading...</div>;
  if (!session) return <div>Please sign in</div>;
  
  return <div>Welcome {session.user?.name}!</div>;
}
```

### Protect API Routes:
```tsx
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth/[...nextauth]/route';

export async function GET(request: Request) {
  const session = await getServerSession(authOptions);
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }
  
  // Your protected logic here
}
```

## 🚀 Going Live

### Production Checklist:

1. **Update Google OAuth**:
   - Add production domain to authorized URIs
   - Update redirect URIs

2. **Update .env**:
   ```env
   NEXTAUTH_URL=https://yourdomain.com
   ```

3. **Enable HTTPS**:
   - NextAuth requires HTTPS in production
   - Use SSL certificate

4. **Test thoroughly**:
   - Sign in/out
   - Payment flow
   - Session persistence

## 📞 Support

- **NextAuth Docs**: https://next-auth.js.org
- **Google OAuth**: https://developers.google.com/identity/protocols/oauth2

## 🎉 You're All Set!

Your HER-WILL website now has:
- ✅ Google Sign-In integration
- ✅ User authentication
- ✅ Payment tracking by user
- ✅ Session management
- ✅ Beautiful UI
- ✅ Production-ready

**Users can now sign in with Gmail and make payments!** 🔐💳

---

## 📋 Quick Reference

### Files Created:
```
src/app/api/auth/[...nextauth]/route.ts - NextAuth config
src/app/auth/signin/page.tsx - Sign-in page
src/components/AuthProvider.tsx - Session provider
src/components/UserMenu.tsx - User dropdown menu
src/types/next-auth.d.ts - TypeScript types
```

### Files Modified:
```
src/components/Navbar.tsx - Added UserMenu
src/components/PaymentButton.tsx - Added auth check
src/app/layout.tsx - Wrapped with AuthProvider
.env.example - Added Google OAuth vars
```

### Environment Variables:
```env
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_secret_here
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

**Start accepting sign-ins and tracking your users!** 👥
