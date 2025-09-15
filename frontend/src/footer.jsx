import React from "react";

export default function Footer() {
  return (
    <footer className="border-top" style={{ backgroundColor: "#FAFAFA" }}>
      <div className="container mt-5">
        <div className="row mt-5 gy-4">
          {/* Logo and intro */}
          <div className="col-12 col-md-6 col-lg-3">
            <img
              src="images/logo.png"
              style={{ width: "50px" }}
              alt="Panchakarma"
            />
            <p className="mt-3 small text-muted">
              &copy; {new Date().getFullYear()} Panchakarma Software Solutions
              <br />
              Bridging traditional Ayurveda with modern healthcare IT.
            </p>
          </div>

          {/* Services */}
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="fs-6 fw-bold mb-3">Services</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/therapy" className="text-decoration-none text-dark">
                  Therapy Scheduling
                </a>
              </li>
              <li>
                <a href="/patients" className="text-decoration-none text-dark">
                  Patient Management
                </a>
              </li>
              <li>
                <a
                  href="/prescriptions"
                  className="text-decoration-none text-dark"
                >
                  Digital Prescriptions
                </a>
              </li>
              <li>
                <a href="/reports" className="text-decoration-none text-dark">
                  Treatment Reports
                </a>
              </li>
              <li>
                <a href="/billing" className="text-decoration-none text-dark">
                  Billing & Payments
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="fs-6 fw-bold mb-3">Support</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/contact" className="text-decoration-none text-dark">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/help" className="text-decoration-none text-dark">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/faq" className="text-decoration-none text-dark">
                  FAQs
                </a>
              </li>
              <li>
                <a href="/feedback" className="text-decoration-none text-dark">
                  Feedback
                </a>
              </li>
              <li>
                <a href="/resources" className="text-decoration-none text-dark">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="fs-6 fw-bold mb-3">Company</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/about" className="text-decoration-none text-dark">
                  About Us
                </a>
              </li>
              <li>
                <a href="/team" className="text-decoration-none text-dark">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/careers" className="text-decoration-none text-dark">
                  Careers
                </a>
              </li>
              <li>
                <a href="/research" className="text-decoration-none text-dark">
                  Research & Innovation
                </a>
              </li>
              <li>
                <a href="/partners" className="text-decoration-none text-dark">
                  Partners
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-6 col-md-4 col-lg-2">
            <h3 className="fs-6 fw-bold mb-3">Resources</h3>
            <ul className="list-unstyled">
              <li>
                <a href="/blog" className="text-decoration-none text-dark">
                  Ayurveda Blog
                </a>
              </li>
              <li>
                <a href="/articles" className="text-decoration-none text-dark">
                  Wellness Articles
                </a>
              </li>
              <li>
                <a
                  href="/case-studies"
                  className="text-decoration-none text-dark"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-decoration-none text-dark">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-decoration-none text-dark">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
