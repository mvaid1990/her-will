import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="badge-custom mb-3 animate-fadeInDown">🔥 India's #1 Women's Fitness Platform</div>
              <h1 className="display-3 fw-bold mb-4 animate-fadeInUp" style={{
                animationDelay: '0.2s',
                textShadow: '2px 2px 8px rgba(0,0,0,0.3)',
                color: 'white'
              }}>
                Transform Your Body,<br/>
                Transform Your Life
              </h1>
              <p className="lead mb-4 animate-fadeInUp" style={{
                fontSize: '1.3rem', 
                animationDelay: '0.4s',
                textShadow: '1px 1px 4px rgba(0,0,0,0.3)',
                color: 'white'
              }}>
                Join <strong style={{color: 'white'}}>10,000+ women</strong> who chose to transform their lives. Start your fitness journey for just <strong style={{fontSize: '1.5rem', color: 'white'}}>₹99/month!</strong>
              </p>
              <div className="d-flex gap-3 mb-4 animate-fadeInUp" style={{animationDelay: '0.6s'}}>
                <Link href="/signup" className="btn btn-light btn-lg px-5 py-3" style={{fontSize: '1.1rem', fontWeight: '600'}}>
                  🚀 Start Free Trial
                </Link>
                <Link href="/plans" className="btn btn-outline-light btn-lg px-5 py-3" style={{fontSize: '1.1rem', fontWeight: '600'}}>
                  View Plans
                </Link>
              </div>
              <div className="d-flex gap-4 text-white animate-fadeInUp" style={{animationDelay: '0.8s'}}>
                <div>
                  <div className="h4 fw-bold mb-0">⭐ 4.9/5</div>
                  <small>2000+ Reviews</small>
                </div>
                <div>
                  <div className="h4 fw-bold mb-0">💪 10K+</div>
                  <small>Active Members</small>
                </div>
                <div>
                  <div className="h4 fw-bold mb-0">🏆 50+</div>
                  <small>Expert Trainers</small>
                </div>
              </div>
            </div>
            <div className="col-lg-6 animate-scaleIn" style={{animationDelay: '0.3s'}}>
              <div className="position-relative">
                <div style={{
                  background: 'rgba(255,255,255,0.1)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '30px',
                  padding: '40px',
                  border: '2px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
                }}>
                  <div className="text-center text-white">
                    <div className="mb-4">
                      <div style={{fontSize: '80px'}}>💪</div>
                    </div>
                    <h3 className="fw-bold mb-3">Start Your Journey Today!</h3>
                    <div className="d-flex justify-content-around mb-4">
                      <div>
                        <div className="h2 fw-bold">30</div>
                        <small>Days</small>
                      </div>
                      <div>
                        <div className="h2 fw-bold">4kg</div>
                        <small>Weight Loss</small>
                      </div>
                      <div>
                        <div className="h2 fw-bold">45min</div>
                        <small>Per Day</small>
                      </div>
                    </div>
                    <Link href="/signup" className="btn btn-light w-100 py-3 fw-bold">
                      Join Now - ₹99 Only!
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold text-white mb-3">Trusted by Thousands of Women</h2>
            <p className="lead text-white-50">Join the fastest-growing fitness community in India</p>
          </div>
          <div className="row">
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">👥 Happy Members</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">🏋️ Expert Trainers</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">⭐ Success Stories</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-4">
              <div className="stat-item">
                <div className="stat-number">₹99</div>
                <div className="stat-label">💰 Starting Price</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-pattern">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-custom mb-3">💎 Premium Features</span>
            <h2 className="display-5 fw-bold mb-3">What You Get in <span className="gradient-text">₹99 Monthly Plan</span></h2>
            <div className="divider"></div>
            <p className="lead text-muted">Everything you need to transform your body and mind</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="feature-card card-hover">
                <div className="feature-icon">🏋️</div>
                <h4 className="fw-bold mb-3">30 Days of Live Sessions</h4>
                <p className="text-muted mb-3">Daily live workout sessions with certified coaches. Never miss a day!</p>
                <ul className="list-unstyled small text-muted">
                  <li>✓ Morning & Evening batches</li>
                  <li>✓ Recorded sessions available</li>
                  <li>✓ Interactive Q&A</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card card-hover">
                <div className="feature-icon">🥗</div>
                <h4 className="fw-bold mb-3">Customized Diet Plans</h4>
                <p className="text-muted mb-3">Simple, home-cooked meal plans tailored to your lifestyle and preferences.</p>
                <ul className="list-unstyled small text-muted">
                  <li>✓ Indian vegetarian options</li>
                  <li>✓ Weekly meal prep guides</li>
                  <li>✓ Calorie tracking support</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card card-hover">
                <div className="feature-icon">🧘</div>
                <h4 className="fw-bold mb-3">Lifestyle & Mindset Guides</h4>
                <p className="text-muted mb-3">Build better habits, manage time, and stay consistent with expert guidance.</p>
                <ul className="list-unstyled small text-muted">
                  <li>✓ Stress management techniques</li>
                  <li>✓ Sleep optimization tips</li>
                  <li>✓ Motivation & accountability</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card card-hover">
                <div className="feature-icon">💊</div>
                <h4 className="fw-bold mb-3">Gut Reset Plan</h4>
                <p className="text-muted mb-3">Improve digestion, boost metabolism, and feel lighter with our gut health program.</p>
                <ul className="list-unstyled small text-muted">
                  <li>✓ Detox protocols</li>
                  <li>✓ Probiotic recommendations</li>
                  <li>✓ Digestive health tracking</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card card-hover">
                <div className="feature-icon">👥</div>
                <h4 className="fw-bold mb-3">Live Expert Discussions</h4>
                <p className="text-muted mb-3">Weekly Q&A sessions with nutritionists, trainers, and wellness experts.</p>
                <ul className="list-unstyled small text-muted">
                  <li>✓ Ask anything sessions</li>
                  <li>✓ Expert panel discussions</li>
                  <li>✓ Personalized advice</li>
                </ul>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="feature-card card-hover">
                <div className="feature-icon">🏆</div>
                <h4 className="fw-bold mb-3">Competitions with Prizes</h4>
                <p className="text-muted mb-3">Monthly challenges with cash prizes up to ₹10,000. Stay motivated and win!</p>
                <ul className="list-unstyled small text-muted">
                  <li>✓ Weight loss challenges</li>
                  <li>✓ Consistency rewards</li>
                  <li>✓ Transformation contests</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center mb-5">
            <span className="badge-custom mb-3">⚡ Why Us</span>
            <h2 className="display-5 fw-bold mb-3">Why Choose <span className="gradient-text">HER-WILL?</span></h2>
            <div className="divider"></div>
            <p className="lead text-muted">Empowering women through fitness and wellness</p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>Science-Backed Programs</h5>
                  <p>Created by Level-5 certified trainers using international standards</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>For All Ages</h5>
                  <p>Designed for women aged 10 to 70 - everyone is welcome!</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>Affordable & Accessible</h5>
                  <p>Just ₹99 per month - fitness for everyone, anywhere, anytime</p>
                </div>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="d-flex align-items-start">
                <div className="flex-shrink-0">
                  <div className="bg-primary text-white rounded-circle p-3" style={{width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    ✓
                  </div>
                </div>
                <div className="flex-grow-1 ms-3">
                  <h5>Supportive Community</h5>
                  <p>Join a movement of strong, confident women transforming their lives</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding" style={{background: 'var(--gradient-primary)', color: 'white', position: 'relative', overflow: 'hidden'}}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          opacity: 1
        }}></div>
        <div className="container text-center" style={{position: 'relative', zIndex: 1}}>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="mb-4" style={{fontSize: '60px'}}>🎯</div>
              <h2 className="display-4 fw-bold mb-4">Ready to Transform Your Life?</h2>
              <p className="lead mb-4" style={{fontSize: '1.3rem'}}>Join <strong>10,000+ women</strong> who chose to take control of their health and wellness</p>
              <div className="d-flex gap-3 justify-content-center flex-wrap mb-4">
                <Link href="/signup" className="btn btn-light btn-lg px-5 py-3" style={{fontSize: '1.2rem', fontWeight: '700', boxShadow: '0 10px 30px rgba(0,0,0,0.3)'}}>
                  🚀 Start Your Journey - ₹99/Month
                </Link>
                <Link href="/plans" className="btn btn-outline-light btn-lg px-5 py-3" style={{fontSize: '1.2rem', fontWeight: '700'}}>
                  View All Plans
                </Link>
              </div>
              <div className="d-flex gap-4 justify-content-center text-white mt-5">
                <div>
                  <div className="h5 fw-bold mb-1">💳 No Hidden Charges</div>
                </div>
                <div>
                  <div className="h5 fw-bold mb-1">🔄 Cancel Anytime</div>
                </div>
                <div>
                  <div className="h5 fw-bold mb-1">✅ Instant Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
