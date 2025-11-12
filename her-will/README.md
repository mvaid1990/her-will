# HER-WILL - Women's Fitness Platform

![HER-WILL Logo](./public/logo.svg)

**HER-WILL** is India's most empowering and affordable women's wellness platform. Transform your body, mind, and lifestyle for just ₹99 per month!

## 🌟 Features

- **₹99 Monthly Weight Loss Plan** - Complete 30-day guided journey
- **Live Fitness Sessions** - Daily workouts with certified coaches
- **Customized Diet Plans** - Simple, home-cooked food plans
- **Lifestyle & Mindset Guides** - Build better habits and stay consistent
- **Gut Reset Plan** - Improve digestion and metabolism
- **Live Expert Discussions** - Interactive Q&A with wellness experts
- **Competitions with Prizes** - Monthly challenges with cash rewards
- **Success Stories** - Real transformations from real women

## 🚀 Tech Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Bootstrap 5** - Responsive UI framework
- **React Bootstrap** - Bootstrap components for React
- **Custom CSS** - Modern, gradient-based design

### Backend
- **Next.js API Routes** - Serverless API endpoints
- **PostgreSQL** - Relational database
- **node-postgres (pg)** - PostgreSQL client for Node.js

## 📁 Project Structure

```
her-will/
├── src/
│   ├── app/
│   │   ├── api/              # API routes
│   │   │   ├── plans/        # Plans CRUD operations
│   │   │   ├── users/        # User management
│   │   │   ├── sessions/     # Live sessions
│   │   │   ├── testimonials/ # Success stories
│   │   │   ├── contact/      # Contact form
│   │   │   └── challenges/   # Fitness challenges
│   │   ├── plans/            # Plans page
│   │   ├── sessions/         # Sessions page
│   │   ├── challenges/       # Challenges page
│   │   ├── testimonials/     # Testimonials page
│   │   ├── contact/          # Contact page
│   │   ├── signup/           # Signup page
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Homepage
│   │   └── globals.css       # Global styles
│   ├── components/
│   │   ├── Navbar.tsx        # Navigation component
│   │   └── Footer.tsx        # Footer component
│   └── lib/
│       └── db.ts             # Database connection
├── database/
│   └── schema.sql            # PostgreSQL schema
├── public/
│   └── logo.svg              # HER-WILL logo
├── package.json
├── tsconfig.json
└── README.md
```

## 🗄️ Database Schema

The application uses PostgreSQL with the following tables:

- **users** - User accounts and profiles
- **plans** - Subscription plans (₹99 monthly plan, etc.)
- **subscriptions** - User plan subscriptions
- **sessions** - Live fitness sessions
- **user_sessions** - Session attendance tracking
- **testimonials** - User success stories
- **contact_submissions** - Contact form submissions
- **challenges** - Fitness competitions
- **challenge_participants** - Challenge enrollment and rankings

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ installed
- PostgreSQL 12+ installed and running
- npm or yarn package manager

### Step 1: Clone and Install Dependencies

```bash
cd her-will
npm install
```

### Step 2: Database Setup

1. Create a PostgreSQL database:

```bash
createdb herwill_db
```

2. Run the schema to create tables:

```bash
psql -d herwill_db -f database/schema.sql
```

### Step 3: Environment Configuration

1. Copy the example environment file:

```bash
cp .env.example .env
```

2. Update `.env` with your database credentials:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/herwill_db
DB_HOST=localhost
DB_PORT=5432
DB_NAME=herwill_db
DB_USER=your_username
DB_PASSWORD=your_password
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Step 4: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Pages & Routes

### Public Pages
- `/` - Homepage with hero section and features
- `/plans` - View all subscription plans
- `/sessions` - Browse upcoming live sessions
- `/challenges` - Active fitness challenges
- `/testimonials` - Success stories from users
- `/contact` - Contact form
- `/signup` - User registration

### API Endpoints

#### Plans
- `GET /api/plans` - Fetch all active plans
- `POST /api/plans` - Create a new plan

#### Users
- `GET /api/users` - Fetch all users
- `POST /api/users` - Register a new user

#### Sessions
- `GET /api/sessions` - Fetch upcoming sessions
- `POST /api/sessions` - Create a new session

#### Testimonials
- `GET /api/testimonials` - Fetch approved testimonials
- `POST /api/testimonials` - Submit a testimonial

#### Contact
- `POST /api/contact` - Submit contact form

#### Challenges
- `GET /api/challenges` - Fetch active challenges
- `POST /api/challenges` - Create a new challenge

## 🎨 Design Features

- **Modern Gradient Design** - Pink/red gradient theme (#FF6B9D to #FF1744)
- **Responsive Layout** - Mobile-first design with Bootstrap
- **Smooth Animations** - Hover effects and transitions
- **Custom Logo** - SVG logo with fitness theme
- **Bootstrap Icons** - Comprehensive icon set
- **Card-based UI** - Clean, organized content presentation

## 💡 Key Features Explained

### ₹99 Monthly Plan Includes:

1. **30 Days of Live Sessions** - Daily workouts with certified coaches
2. **Diet Plans** - Customized, home-cooked meal plans
3. **Lifestyle Guides** - Habit building and time management
4. **Gut Reset Plan** - Digestive health program
5. **Expert Discussions** - Live Q&A sessions
6. **Competitions** - Monthly challenges with cash prizes

### Target Results:
- Lose up to **4 kilos in 30 days**
- Just **45 minutes a day**
- Designed for women aged **10 to 70**

## 🔒 Security Notes

- Environment variables are used for sensitive data
- Database credentials should never be committed
- API routes validate input data
- SQL injection prevention through parameterized queries

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Environment Variables for Production

Ensure all environment variables are set in your production environment:
- Database connection strings
- API URLs
- Any third-party service keys

## 📊 Database Maintenance

### Backup Database

```bash
pg_dump herwill_db > backup.sql
```

### Restore Database

```bash
psql herwill_db < backup.sql
```

## 🤝 Contributing

This is a fitness platform designed to empower women. Contributions that enhance user experience, add features, or improve performance are welcome.

## 📄 License

Copyright © 2024 HER-WILL. All rights reserved.

## 🌐 Reference

This project was inspired by the design and features of [BodyShape](https://bodyshape.dexignzone.com/react/).

## 📞 Support

For support, email info@herwill.com or call +91 98765 43210.

---

**Made with ❤️ for empowering women through fitness**

*Because when women decide, results happen.*
