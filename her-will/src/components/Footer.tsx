import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <Image src="/logo.svg" alt="HER-WILL Logo" width={40} height={40} />
              <h5 className="ms-2 mb-0">HER-WILL</h5>
            </div>
            <p className="text-light">
              India's most empowering and affordable women's wellness platform. 
              Transform your body, mind, and lifestyle with us.
            </p>
          </div>
          
          <div className="col-md-2 mb-4">
            <h6 className="text-uppercase mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light text-decoration-none">Home</Link></li>
              <li><Link href="/plans" className="text-light text-decoration-none">Plans</Link></li>
              <li><Link href="/sessions" className="text-light text-decoration-none">Sessions</Link></li>
              <li><Link href="/challenges" className="text-light text-decoration-none">Challenges</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Support</h6>
            <ul className="list-unstyled">
              <li><Link href="/contact" className="text-light text-decoration-none">Contact Us</Link></li>
              <li><Link href="/faq" className="text-light text-decoration-none">FAQ</Link></li>
              <li><Link href="/privacy" className="text-light text-decoration-none">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-light text-decoration-none">Terms & Conditions</Link></li>
            </ul>
          </div>
          
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase mb-3">Connect With Us</h6>
            <div className="d-flex gap-3 mb-3">
              <a href="#" className="text-light"><i className="bi bi-facebook fs-4"></i></a>
              <a href="#" className="text-light"><i className="bi bi-instagram fs-4"></i></a>
              <a href="#" className="text-light"><i className="bi bi-youtube fs-4"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter fs-4"></i></a>
            </div>
            <p className="text-light small">
              <i className="bi bi-envelope me-2"></i>info@herwill.com<br/>
              <i className="bi bi-phone me-2"></i>+91 98765 43210
            </p>
          </div>
        </div>
        
        <hr className="bg-light"/>
        
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="mb-0 text-light small">
              &copy; {new Date().getFullYear()} HER-WILL. All rights reserved. | Empowering Women, One Workout at a Time
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
