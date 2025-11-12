-- HER-WILL Sample Data
-- Run this after creating the schema: psql -d herwill_db -f database/sample-data.sql

-- Insert sample users
INSERT INTO users (email, name, phone, age) VALUES
('priya.sharma@example.com', 'Priya Sharma', '+91 98765 43210', 28),
('anjali.patel@example.com', 'Anjali Patel', '+91 98765 43211', 35),
('sneha.reddy@example.com', 'Sneha Reddy', '+91 98765 43212', 42),
('kavita.singh@example.com', 'Kavita Singh', '+91 98765 43213', 31),
('meera.kumar@example.com', 'Meera Kumar', '+91 98765 43214', 26),
('riya.gupta@example.com', 'Riya Gupta', '+91 98765 43215', 38),
('pooja.verma@example.com', 'Pooja Verma', '+91 98765 43216', 29),
('nisha.jain@example.com', 'Nisha Jain', '+91 98765 43217', 45),
('divya.mehta@example.com', 'Divya Mehta', '+91 98765 43218', 33),
('sakshi.rao@example.com', 'Sakshi Rao', '+91 98765 43219', 27);

-- Insert additional plans
INSERT INTO plans (name, price, duration_days, description, features) VALUES
('3-Month Transformation', 249.00, 90, 'Complete body transformation program with personalized coaching', 
 '["90 Days of Live Sessions", "Personal Fitness Coach", "Advanced Diet Plans", "Weekly Progress Tracking", "Exclusive Workshops", "Priority Support", "Nutrition Supplements Guide"]'::jsonb),
('6-Month Premium', 449.00, 180, 'Ultimate fitness journey with guaranteed results', 
 '["180 Days of Live Sessions", "Dedicated Personal Trainer", "Customized Meal Plans", "Body Composition Analysis", "Yoga & Meditation Classes", "VIP Community Access", "Lifetime Recipe Book"]'::jsonb),
('Annual Elite', 799.00, 365, 'Year-long commitment to your best self', 
 '["365 Days of Live Sessions", "1-on-1 Coaching Calls", "Complete Wellness Package", "Quarterly Health Checkups", "Exclusive Retreats Access", "Lifetime Membership Benefits", "Family Plan Options"]'::jsonb);

-- Insert subscriptions
INSERT INTO subscriptions (user_id, plan_id, start_date, end_date, status, payment_status) VALUES
(1, 1, NOW() - INTERVAL '15 days', NOW() + INTERVAL '15 days', 'active', 'paid'),
(2, 1, NOW() - INTERVAL '10 days', NOW() + INTERVAL '20 days', 'active', 'paid'),
(3, 2, NOW() - INTERVAL '30 days', NOW() + INTERVAL '60 days', 'active', 'paid'),
(4, 1, NOW() - INTERVAL '5 days', NOW() + INTERVAL '25 days', 'active', 'paid'),
(5, 3, NOW() - INTERVAL '45 days', NOW() + INTERVAL '135 days', 'active', 'paid');

-- Insert live sessions
INSERT INTO sessions (title, description, session_date, duration_minutes, instructor_name, session_type, max_participants, is_live, video_url) VALUES
('Morning Cardio Blast', 'High-energy cardio workout to kickstart your day', NOW() + INTERVAL '1 day', 45, 'Priya Fitness Coach', 'Cardio', 50, false, NULL),
('Yoga for Beginners', 'Gentle yoga flow perfect for beginners', NOW() + INTERVAL '1 day' + INTERVAL '6 hours', 60, 'Anjali Yoga Master', 'Yoga', 30, false, NULL),
('HIIT Fat Burner', 'Intense interval training for maximum fat burn', NOW() + INTERVAL '2 days', 30, 'Sneha Trainer', 'HIIT', 40, false, NULL),
('Strength Training Basics', 'Build muscle and increase strength', NOW() + INTERVAL '2 days' + INTERVAL '5 hours', 50, 'Kavita Strength Coach', 'Strength', 35, false, NULL),
('Dance Fitness Party', 'Fun Bollywood dance workout', NOW() + INTERVAL '3 days', 45, 'Meera Dance Instructor', 'Dance', 60, false, NULL),
('Core & Abs Workout', 'Targeted core strengthening exercises', NOW() + INTERVAL '3 days' + INTERVAL '4 hours', 30, 'Riya Core Specialist', 'Core', 45, false, NULL),
('Pilates Flow', 'Low-impact full body workout', NOW() + INTERVAL '4 days', 55, 'Pooja Pilates Expert', 'Pilates', 25, false, NULL),
('Evening Stretch & Relax', 'Gentle stretching and relaxation', NOW() + INTERVAL '4 days' + INTERVAL '8 hours', 40, 'Nisha Wellness Coach', 'Stretching', 50, false, NULL),
('Power Yoga', 'Dynamic yoga for strength and flexibility', NOW() + INTERVAL '5 days', 60, 'Divya Yoga Guru', 'Yoga', 30, false, NULL),
('Zumba Fitness', 'Latin-inspired dance workout', NOW() + INTERVAL '5 days' + INTERVAL '3 hours', 45, 'Sakshi Zumba Instructor', 'Dance', 55, false, NULL);

-- Insert user session attendance
INSERT INTO user_sessions (user_id, session_id, attended, rating, feedback) VALUES
(1, 1, true, 5, 'Amazing session! Lost so much sweat and felt energized.'),
(2, 1, true, 4, 'Great workout, instructor was very motivating.'),
(3, 2, true, 5, 'Perfect for beginners like me. Very calming.'),
(4, 3, true, 5, 'Intense but worth it! Feeling the burn.'),
(5, 4, true, 4, 'Learned proper form for strength training.');

-- Insert testimonials
INSERT INTO testimonials (user_id, name, content, rating, weight_lost, is_approved) VALUES
(1, 'Priya Sharma', 'I lost 5 kg in just one month! The live sessions are so motivating and the diet plan was easy to follow. HER-WILL changed my life!', 5, 5.0, true),
(2, 'Anjali Patel', 'As a working mom, I thought I had no time for fitness. But the flexible schedule and 45-minute sessions fit perfectly into my routine. Lost 3.5 kg and feeling amazing!', 5, 3.5, true),
(3, 'Sneha Reddy', 'At 42, I thought it was too late to get fit. HER-WILL proved me wrong! The coaches are so supportive and the community is incredible. Down 6 kg in 2 months!', 5, 6.0, true),
(4, 'Kavita Singh', 'Best investment I made for myself! The ₹99 plan is unbelievably affordable for what you get. Lost 4 kg and gained so much confidence.', 5, 4.0, true),
(5, 'Meera Kumar', 'The gut reset plan was a game-changer for me. Not just weight loss, but I feel healthier overall. Lost 4.5 kg and my digestion improved dramatically!', 5, 4.5, true),
(6, 'Riya Gupta', 'I have tried many fitness programs but HER-WILL is different. The focus on women-specific needs and the supportive community made all the difference. Lost 7 kg!', 5, 7.0, true),
(7, 'Pooja Verma', 'The live expert discussions helped me understand nutrition better. Combined with daily workouts, I lost 3 kg in my first month. Highly recommend!', 4, 3.0, true),
(8, 'Nisha Jain', 'At 45, I was skeptical but the results speak for themselves. The coaches modify exercises for different fitness levels. Lost 5.5 kg and feel 10 years younger!', 5, 5.5, true);

-- Insert challenges
INSERT INTO challenges (title, description, start_date, end_date, prize_amount, rules, is_active) VALUES
('30-Day Weight Loss Challenge', 'Lose the most weight in 30 days and win cash prizes! Track your progress daily and compete with fellow members.', 
 NOW(), NOW() + INTERVAL '30 days', 5000.00, 
 '["Attend minimum 20 live sessions", "Submit weekly weight updates", "Follow prescribed diet plan", "Share progress photos", "Maintain workout journal"]'::jsonb, true),
 
('Consistency Queen Challenge', 'Attend the most sessions in a month and win! Perfect attendance gets bonus points.', 
 NOW() + INTERVAL '5 days', NOW() + INTERVAL '35 days', 3000.00, 
 '["Attend maximum live sessions", "Complete all workout challenges", "Submit daily check-ins", "Encourage other members", "Share fitness tips"]'::jsonb, true),
 
('Transformation Challenge', 'Complete body transformation in 60 days with before/after photos and measurements.', 
 NOW() - INTERVAL '15 days', NOW() + INTERVAL '45 days', 10000.00, 
 '["Submit before photos and measurements", "Attend 45+ sessions", "Follow complete meal plan", "Submit weekly progress", "Share transformation story"]'::jsonb, true);

-- Insert challenge participants
INSERT INTO challenge_participants (challenge_id, user_id, initial_weight, current_weight, weight_lost) VALUES
(1, 1, 68.0, 65.5, 2.5),
(1, 2, 75.0, 72.8, 2.2),
(1, 3, 82.0, 78.5, 3.5),
(1, 4, 70.0, 68.0, 2.0),
(1, 5, 65.0, 62.5, 2.5),
(2, 1, 65.5, 65.0, 0.5),
(2, 6, 72.0, 70.5, 1.5),
(2, 7, 68.0, 66.8, 1.2),
(3, 3, 82.0, 76.0, 6.0),
(3, 8, 78.0, 72.5, 5.5);

-- Insert contact submissions
INSERT INTO contact_submissions (name, email, phone, subject, message, status) VALUES
('Aarti Desai', 'aarti.desai@example.com', '+91 98765 43220', 'Question about diet plans', 'Hi, I am vegetarian. Do you have vegetarian diet options?', 'new'),
('Swati Iyer', 'swati.iyer@example.com', '+91 98765 43221', 'Session timings', 'Can I get morning session timings? I work night shifts.', 'new'),
('Rekha Nair', 'rekha.nair@example.com', '+91 98765 43222', 'Payment query', 'Do you accept UPI payments?', 'responded'),
('Tanvi Shah', 'tanvi.shah@example.com', '+91 98765 43223', 'Joining inquiry', 'I am 55 years old. Is this program suitable for me?', 'new'),
('Madhuri Pillai', 'madhuri.pillai@example.com', '+91 98765 43224', 'Feedback', 'Loving the program! Just wanted to say thank you!', 'responded');

-- Update challenge participant rankings based on weight lost
UPDATE challenge_participants SET rank = subquery.rank
FROM (
    SELECT id, ROW_NUMBER() OVER (PARTITION BY challenge_id ORDER BY weight_lost DESC) as rank
    FROM challenge_participants
) AS subquery
WHERE challenge_participants.id = subquery.id;

-- Success message
SELECT 'Sample data inserted successfully!' as message;
SELECT COUNT(*) as total_users FROM users;
SELECT COUNT(*) as total_plans FROM plans;
SELECT COUNT(*) as total_sessions FROM sessions;
SELECT COUNT(*) as total_testimonials FROM testimonials;
SELECT COUNT(*) as total_challenges FROM challenges;
