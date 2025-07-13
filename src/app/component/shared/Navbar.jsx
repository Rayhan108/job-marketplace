"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/CookconneKt 1.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";

const navItems = [
  { label: "Find Profiles", href: "/findProfile" },
  { label: "Job Offers", href: "/jobOffers" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState(true);

  const role = "user";
  const profileLink = role === "contractor" ? "/dashboard" : "/myProfile";

  const userData = {
    name: "Giring Furqon",
    avatar: "/default-avatar.png", // Replace with actual image
  };

  const isLoggedIn = user;

  return (
    
   <div className="bg-white w-full px-4 py-2 ">
     <nav className="container mx-auto flex justify-between items-center ">
      {/* Left: Logo */}
      <Link href="/">
        <div className="flex items-center space-x-2">
          <Image src={logo} alt="Logo" width={46} height={46} />
          <h1 className="text-lg font-semibold">CookconneKt</h1>
        </div>
      </Link>

      {/* Center: Nav Links */}
      <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`hover:text-orange-500 ${
                  isActive ? "text-orange-600 font-semibold" : ""
                }`}
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Right: Auth/User Info */}
      <div className="hidden lg:flex items-center space-x-4">
        {isLoggedIn ? (
          <>
            {/* Avatar and Name */}
            <Link href={profileLink}>
              <div className="flex items-center space-x-2">
                <Image
                  src={userData.avatar}
                  alt="User Avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div className="text-sm">
                  <p className="text-gray-600 font-medium">Hi!!!</p>
                  <p className="text-gray-800">{userData.name}</p>
                </div>
              </div>
            </Link>

            {/* Notification Bell */}
            <Link href="/notificationPage">
              <div
                className={`p-2 border border-gray-400 rounded-full hover:bg-gray-100 cursor-pointer ${
                  pathname === "/notificationPage"
                    ? "bg-orange-500 text-white"
                    : ""
                }`}
              >
                <IoNotificationsOutline size={20} />
              </div>
            </Link>

            {/* Translate Dropdown (dummy for now) */}
            <div className="flex items-center space-x-1 border border-gray-300 px-2 py-1 rounded-md text-sm text-gray-700 cursor-pointer">
              <FaGlobe size={14} />
              <span>Translate</span>
            </div>
          </>
        ) : (
          <>
            {/* Sign Up Button */}
            <Link href="/signup">
              <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 text-sm">
                Sign Up
              </button>
            </Link>

            {/* Login Button */}
            <Link href="/login">
              <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded hover:bg-orange-50 text-sm">
                Login
              </button>
            </Link>
          </>
        )}
      </div>

      {/* Mobile: Toggle Button */}
      <button
        className="lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <svg
          className="w-6 h-6 text-gray-800"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-t z-50 shadow-md lg:hidden">
          <ul className="flex flex-col space-y-2 px-4 py-3 text-gray-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${
                    pathname === item.href
                      ? "text-orange-500 font-semibold"
                      : ""
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="border-t pt-3">
              {isLoggedIn ? (
                <div className="flex flex-col space-y-3">
                  <Link href={profileLink}>
                    <div className="flex items-center space-x-2">
                      <Image
                        src={userData.avatar}
                        alt="User"
                        width={30}
                        height={30}
                        className="rounded-full"
                      />
                      <span className="font-medium">{userData.name}</span>
                    </div>
                  </Link>
                  <Link href="/notificationPage">
                    <span className="text-sm text-gray-700 flex items-center gap-2">
                      <IoNotificationsOutline /> Notifications
                    </span>
                  </Link>
                </div>
              ) : (
                <div className="flex flex-col space-y-2">
                  <Link href="/signup">
                    <button className="bg-orange-500 text-white px-4 py-2 rounded">
                      Sign Up
                    </button>
                  </Link>
                  <Link href="/login">
                    <button className="border border-orange-500 text-orange-500 px-4 py-2 rounded">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
   </div>
  );
}
