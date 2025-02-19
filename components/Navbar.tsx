"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faTools, faEnvelope, faCheckCircle, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 left-0 w-full z-[100] bg-[#f5f5f5] shadow-md border-b border-gray-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <img src="/logo.png" alt="Logo" className="w-36 h-12 object-contain" />
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-4">
            <NavItem href="/about-us" icon={faInfoCircle} label="About Us" />
            <NavItem href="/services" icon={faTools} label="Services" />
            <NavItem href="/contact" icon={faEnvelope} label="Contact" />

            {/* Call-to-Action Button */}
            <Link
              href="/waitlist"
              className="bg-black text-white px-5 py-2 rounded-md font-semibold shadow-md hover:bg-gray-800 transition duration-300 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faUserPlus} className="w-4 h-4" />
              Join Waitlist
            </Link>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Navigation Button Component
const NavItem = ({ href, icon, label }: { href: string; icon: any; label: string }) => (
  <Link
    href={href}
    className="bg-[#1a1b2d] text-white px-4 py-2 rounded-md shadow-md hover:bg-gray-900 transition duration-300 flex items-center gap-2"
  >
    <FontAwesomeIcon icon={icon} className="w-4 h-4" />
    {label}
  </Link>
);

export default Navbar;


