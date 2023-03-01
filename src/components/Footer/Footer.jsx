import "./footer.css";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Section - Payment Modes */}
      <div className="section-payment-modes flex-row flex-justify-evenly flex-align-center gap-3 flex-wrap mt-5 p-3">
        <span className="color-primary text-xxxl font-bold">
          <i className="fa-brands fa-cc-mastercard" />
        </span>
        <span className="color-primary text-xxxl font-bold">
          <i className="fa-brands fa-cc-visa" />
        </span>
        <span className="color-primary text-xxxl font-bold">
          <i className="fa-brands fa-google-pay" />
        </span>
        <span className="color-primary text-xxxl font-bold">
          <i className="fa-brands fa-apple-pay" />
        </span>
        <span className="color-primary text-xxxl font-bold">
          <i className="fa-brands fa-amazon-pay" />
        </span>
        <span className="color-primary text-xxxl font-bold">
          <i className="fa-brands fa-paypal" />
        </span>
      </div>
      {/* Footer */}
      <footer className="flex-col flex-justify-center flex-align-center w-full">
        <div className="flex-row flex-justify-between flex-align-start gap-3 flex-wrap align-self-center py-6 px-2 w-80-pc">
          <ul>
            <p className="footer-list-head text-lg font-bold mb-1 py-0-25 px-2 rounded-sm w-fit">
              Quick Links
            </p>
            <li>
              <Link to="/about-us" className="btn btn-link-naked">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="btn btn-link-naked">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="btn btn-link-naked">
                Terms of Use
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="btn btn-link-naked">
                Privacy Policy
              </Link>
            </li>
          </ul>
          <ul>
            <li className="footer-list-head text-lg font-bold mb-1 py-0-25 px-2 rounded-sm w-fit">
              Our Hub
            </li>
            <li>
              <address>
                Petkart Paws Hub
                <br />
                Gopur Square,
                <br />
                Annapurna Road,
                <br />
                Indore, Madhya Pradesh,
                <br />
                India - 452009
              </address>
            </li>
          </ul>
          <ul>
            <li className="footer-list-head text-lg font-bold mb-1 py-0-25 px-2 rounded-sm w-fit">
              Customer Support
            </li>
            <li>
              <Link className="btn btn-link-naked" to="/support-helpline">
                <span className="mr-0-5">
                  <i className="fa-solid fa-phone" />
                </span>
                Support Helpline
              </Link>
            </li>
            <li>
              <a
                className="btn btn-link-naked"
                href="mailto:support@petkart.com"
              >
                <span className="mr-0-5">
                  <i className="fa-solid fa-envelope" />
                </span>
                Email Us
              </a>
            </li>
            <li>
              Mon-Sat : 9AM to 9PM IST
              <br />
              Sun : 11AM to 5PM IST
            </li>
          </ul>
          <ul>
            <li className="footer-list-head text-lg font-bold mb-1 py-0-25 px-2 rounded-sm w-fit">
              Social Media
            </li>
            <div className="mx-0-5">
              <a
                className="mx-0-75"
                href="https://github.com/rishbitsnbytes"
                target="_blank"
              >
                <span className="text-xxl font-bold">
                  <i className="fa-brands fa-github btn btn-icon" />
                </span>
              </a>
              <a
                className="mx-0-75"
                href="https://twitter.com/rishbitsnbytes"
                target="_blank"
              >
                <span className="text-xxl font-bold">
                  <i className="fa-brands fa-twitter btn btn-icon" />
                </span>
              </a>
              <a
                className="mx-0-75"
                href="https://www.linkedin.com/in/rishrathore/"
                target="_blank"
              >
                <span className="text-xxl font-bold">
                  <i className="fa-brands fa-linkedin btn btn-icon" />
                </span>
              </a>
            </div>
          </ul>
        </div>
        <div className="footer-copyright-text p-2 w-80-pc align-self-center text-center">
          <p className="my-1">
            <span className="mx-0-75">
              <i className="fa-regular fa-copyright" />
            </span>
            2022 - rishbitsnbytes
          </p>
          <p className="my-1">
            <span className="mx-0-75">
              <i className="fa-solid fa-code" />
            </span>
            by
            <a
              href="https://rishbitsnbytes.netlify.app/"
              className="btn btn-link-animated-2 mx-1"
            >
              <span className="color-tertiary text-lg font-bold">
                Rishabh Rathore
              </span>
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export { Footer };
