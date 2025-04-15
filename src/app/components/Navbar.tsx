"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold tracking-tight text-white">
                Countertechnique Tools
              </span>
            </div>
            <div className="ml-12 flex items-center space-x-8">
              <Link
                href="/"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === "/"
                    ? "bg-white/20 backdrop-blur-sm text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  pathname === "/about"
                    ? "bg-white/20 backdrop-blur-sm text-white"
                    : "text-white/90 hover:bg-white/10 hover:text-white"
                }`}
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
