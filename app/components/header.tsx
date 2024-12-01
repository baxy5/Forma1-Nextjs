"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

const Header = () => {
  const { user, logout } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold">
              BlueBull
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Főoldal
            </Link>
            <Link
              href="/dashboard"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Adatok
            </Link>
            {user?.role === "ROLE_ADMIN" && (
              <Link
                href="/messages"
                className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Üzenetek
              </Link>
            )}
            <Link
              href="/send-messages"
              className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Üzenetküldés
            </Link>
          </div>
          <div className="hidden sm:flex sm:space-x-4">
            {!user ? (
              <>
                <Link
                  href="/login"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                >
                  Bejelentkezés
                </Link>
                <Link
                  href="/signup"
                  className="bg-black text-white hover:bg-gray-800 px-4 py-2 text-sm font-medium rounded-full"
                >
                  Regisztráció
                </Link>
              </>
            ) : (
              <>
                <div className="text-gray-700 px-3 py-2 text-sm font-medium">
                  {user?.sub}
                </div>
                <button
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                  onClick={() => handleLogout()}
                >
                  Kijelentkezés
                </button>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
