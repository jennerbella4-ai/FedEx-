import Link from "next/link";
import Image from "next/image";
import logo from "../public/logo.png"; // adjust the path to your logo

export default function Header() {
  return (
    // <header className="bg-fedex-purple shadow-md">
    //   <nav className="container mx-auto px-4 py-4">
    //     <div className="flex items-center justify-between">
    //       {/* Logo */}
    //       <Link href="/" className="">
    //         <div className=" ">
    //           <Image
    //             src={logo}
    //             alt="FedEx Logo"
    //             width={100}
    //             height={100}
    //             className="object-contain"
    //           />
    //         </div>
    //       </Link>

    //       {/* Navigation Links */}
    //       <div className="hidden md:flex items-center text-white space-x-6">
    //         <Link
    //           href="/"
    //           className="hover:underline font-medium transition-colors"
    //         >
    //           Track
    //         </Link>
    //         <Link
    //           href="/create-shipment"
    //           className="hover:underline font-medium transition-colors"
    //         >
    //           Create Shipment
    //         </Link>
    //         <Link
    //           href="/dashboard"
    //           className="hover:underline font-medium transition-colors"
    //         >
    //           Dashboard
    //         </Link>
    //         <button className="bg-fedex-purple text-white px-6 py-2 rounded-lg font-medium hover:bg-purple-800 transition-colors">
    //           Sign In
    //         </button>
    //       </div>

    //       {/* Mobile Menu Button */}
    //       <div className="md:hidden">
    //         <button className="text-gray-700 hover:text-fedex-purple focus:outline-none">
    //           ☰
    //         </button>
    //       </div>
    //     </div>
    //   </nav>
    // </header>
    <header className="sticky top-0 z-50 bg-fedex-purple">
      <div className="max-w-5xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16 text-white">
          <img src="/logo.png" alt="FedEx Logo" className="h-8 w-auto" />
          <div className="flex items-center gap-6">
            <ul className="hidden lg:flex items-center gap-6 text-sm font-medium">
              <li className="relative group">
                <button className="hover:underline">Shipping</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 text-black bg-white shadow-lg border mt-2 rounded-md">
                  <ul className="p-4 space-y-3">
                    <li>
                      <a href="#" className="hover:text-purple-700">
                        Create a Shipment
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-purple-700">
                        Rates & Delivery Times
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-purple-700">
                        Schedule a Pickup
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-700 font-semibold">
                        All Shipping Services
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative group">
                <button className="hover:underline">Tracking</button>
                <div className="absolute left-0 top-full hidden group-hover:block text-black w-72 bg-white shadow-lg border mt-2 rounded-md p-4">
                  <input
                    type="text"
                    placeholder="Tracking ID"
                    className="w-full border rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-600"
                  />
                  <button className="mt-3 w-full bg-purple-700 text-white py-2 rounded text-sm">
                    Track
                  </button>
                  <a
                    href="#"
                    className="block mt-3 text-purple-700 text-sm font-medium"
                  >
                    All Tracking Services
                  </a>
                </div>
              </li>

              <li className="relative group">
                <button className="hover:underline">Design & Print</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 text-black bg-white shadow-lg border mt-2 rounded-md">
                  <ul className="p-4 space-y-3">
                    <li>
                      <a href="#">Explore Products</a>
                    </li>
                    <li>
                      <a href="#">Browse Services</a>
                    </li>
                    <li>
                      <a href="#" className="text-purple-700 font-semibold">
                        Visit Marketplace
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="relative group">
                <button className="hover:underline">Locations</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-56 text-black bg-white shadow-lg border mt-2 rounded-md p-4">
                  <a href="#" className="block hover:text-purple-700">
                    Find a Location
                  </a>
                </div>
              </li>

              <li className="relative group">
                <button className="hover:underline">Support</button>
                <div className="absolute left-0 top-full hidden group-hover:block w-64 text-black bg-white shadow-lg border mt-2 rounded-md">
                  <ul className="p-4 space-y-3">
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">File a Claim</a>
                    </li>
                    <li>
                      <a href="#" className=" font-semibold">
                        Customer Support
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-4 ">
            <button className="hidden lg:block text-sm hover:underline">
              Sign Up or Log In
            </button>

            <button className="p-2 rounded hover:bg-gray-100">🔍</button>

            <button className="lg:hidden p-2 rounded hover:bg-gray-100">
              ☰
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
