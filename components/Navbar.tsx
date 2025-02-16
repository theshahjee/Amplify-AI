import Link from 'next/link';
import MaxWidthWrapper from './MaxWidthWrapper';

const Navbar = async () => {
  return (
    <nav className="sticky top-0 z-[100] h-14 w-full border-b border-gray-200 bg-gray-100 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex z-40 font-semibold">
            <img src="/logo.png" alt="logo" className="w-24 h-8" />
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <Link
              href="/about-us"
              className="text-gray-700 hover:text-black transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/success"
              className="text-gray-700 hover:text-black transition-colors"
            >
              Success
            </Link>

            {/* Call-to-Action: Waitlist */}
            <Link
              href="/waitlist"
              className="rounded-full text-primary h-9 px-4 md:px-6 text-center text-white bg-black flex items-center justify-center"
            >
              Join Waitlist
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
