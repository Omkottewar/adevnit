import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100  p-10 lg:p-20">
      {/* Logo Section */}
      <img className="w-32 mb-10" src={""} alt="Company Logo" />

      {/* Links Section */}
      <div className="flex flex-wrap max-lg:flex-col lg:w-[1000px] gap-16">
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-black text-lg">Products</h1>
          <Link to="/mobile" className="footer-link">
            Mobile App
          </Link>
          <Link to="/desktop" className="footer-link">
            Extension
          </Link>
          <Link to="/dashboard" className="footer-link">
            Dashboard
          </Link>
        </div>


        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-black text-lg">Resources</h1>
          <Link to="/blog" className="footer-link">
            Blog
          </Link>
          <Link to="/support" className="footer-link">
            Support
          </Link>
          <Link to="/security" className="footer-link">
            Security
          </Link>
          <Link to="/changelog" className="footer-link">
            Changelog
          </Link>
          <Link to="/media-kit" className="footer-link">
            Media Kit
          </Link>
        </div>
        <div className="flex flex-col gap-3">
          <h1 className="font-bold text-black text-lg">Community</h1>
          <Link to="/twitter" className="footer-link">
            Twitter
          </Link>
          <Link to="/reddit" className="footer-link">
            Reddit
          </Link>
          <Link to="/farcaster" className="footer-link">
            Farcaster
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Footer;
