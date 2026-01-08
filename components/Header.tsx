import Link from 'next/link';
import Image from 'next/image';
import logo from '../public/logo.png'; // adjust the path to your logo

export default function Header() {
  return (
    <header className="bg-fedex-purple shadow-md">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="">
            <div className=" ">
              <Image 
                src={logo} 
                alt="FedEx Logo" 
                width={100} 
                height={100} 
                className="object-contain"
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center text-white space-x-6">
            <Link 
              href="/" 
              className="hover:underline font-medium transition-colors"
            >
              Track
            </Link>
            <Link 
              href="/create-shipment" 
              className="hover:underline font-medium transition-colors"
            >
              Create Shipment
            </Link>
            <Link 
              href="/dashboard" 
              className="hover:underline font-medium transition-colors"
            >
              Dashboard
            </Link>
            <button className="bg-fedex-purple text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-800 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-fedex-purple focus:outline-none">
              ☰
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
