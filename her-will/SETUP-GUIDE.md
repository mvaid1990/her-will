# Quick Setup Guide

## Fix Database Connection Error

The error you're seeing (code '28000') means PostgreSQL authentication failed. Follow these steps:

### Step 1: Update .env file

Edit your `.env` file with your actual PostgreSQL credentials:

```bash
# Open the .env file
nano .env
```

Update these values:

```env
DATABASE_URL=postgresql://YOUR_USERNAME:YOUR_PASSWORD@localhost:5432/herwill_db
DB_HOST=localhost
DB_PORT=5432
DB_NAME=herwill_db
DB_USER=YOUR_USERNAME
DB_PASSWORD=YOUR_PASSWORD
NEXT_PUBLIC_API_URL=http://localhost:3000
```

**Common PostgreSQL usernames:**
- macOS: Usually your Mac username (run `whoami` to check)
- Default: `postgres`

**If you don't have a password set:**
- Leave `DB_PASSWORD` empty or remove it
- Update `DATABASE_URL` to: `postgresql://YOUR_USERNAME@localhost:5432/herwill_db`

### Step 2: Test Database Connection

```bash
# Try connecting to the database
psql -d herwill_db

# If successful, you'll see:
# herwill_db=#

# Exit with:
\q
```

### Step 3: Load Sample Data

Once your `.env` is configured correctly:

```bash
# Load all sample data
psql -d herwill_db -f database/sample-data.sql
```

This will add:
- ✅ 10 sample users
- ✅ 4 subscription plans (including the ₹99 plan)
- ✅ 10 upcoming live sessions
- ✅ 8 testimonials with real success stories
- ✅ 3 active challenges with prizes
- ✅ Challenge participants with rankings
- ✅ 5 contact form submissions

### Step 4: Start the Development Server

```bash
npm run dev
```

Visit: http://localhost:3000

## Pages You Can Now View

All pages will have real data:

1. **Homepage** (/) - Stats and features
2. **Plans** (/plans) - 4 subscription plans
3. **Sessions** (/sessions) - 10 upcoming sessions
4. **Challenges** (/challenges) - 3 active challenges
5. **Testimonials** (/testimonials) - 8 success stories
6. **Contact** (/contact) - Contact form
7. **Signup** (/signup) - User registration

## Troubleshooting

### If you still get authentication errors:

1. **Check PostgreSQL is running:**
   ```bash
   pg_isready
   ```

2. **Find your PostgreSQL username:**
   ```bash
   whoami
   ```

3. **Try connecting without password:**
   ```bash
   psql -d herwill_db -U $(whoami)
   ```

4. **If using default postgres user:**
   ```bash
   psql -d herwill_db -U postgres
   ```

### Reset PostgreSQL password (if needed):

```bash
# Connect as superuser
psql postgres

# Set password for your user
ALTER USER your_username WITH PASSWORD 'your_new_password';

# Exit
\q
```

## Quick Database Commands

```bash
# View all tables
psql -d herwill_db -c "\dt"

# Count records in each table
psql -d herwill_db -c "SELECT 'users' as table_name, COUNT(*) FROM users 
UNION ALL SELECT 'plans', COUNT(*) FROM plans 
UNION ALL SELECT 'sessions', COUNT(*) FROM sessions 
UNION ALL SELECT 'testimonials', COUNT(*) FROM testimonials;"

# Clear all data (if you want to start fresh)
psql -d herwill_db -f database/schema.sql

# Reload sample data
psql -d herwill_db -f database/sample-data.sql
```

## Need Help?

If you're still having issues, share the output of:

```bash
echo "Username: $(whoami)"
pg_isready
psql -d herwill_db -c "SELECT version();"
```
