import React from 'react'

export default function Footer1() {
  return (
    <div>
      <footer className="border-t border-gray-300 py-10 mt-5">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="flex items-center justify-center w-8 h-8 ">
                  <img src="images/logo.png" className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold">PanchaFlow</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Bridging ancient wisdom with modern efficiency for comprehensive
                wellness management.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Security
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-wellness-green transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className=" mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; 2024 PanchaFlow. Empowering wellness practices worldwide.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
