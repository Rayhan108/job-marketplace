"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../assets/CookconneKt 1.png";
import userImg from "../../../assets/Group.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoNotificationsOutline } from "react-icons/io5";
import { FaGlobe } from "react-icons/fa";
import { MdOutlineTranslate } from "react-icons/md";

const navItems = [
  { label: "Find Profiles", href: "/jobProfile" },
  { label: "Job Offers", href: "/allJobs" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  const role = "user";
  const profileLink = role === "contractor" ? "/dashboard" : "/myProfile";

  const userData = {
    name: "Giring Furqon",
    avatar: userImg,
  };

  const isLoggedIn = true; // set true to test user dropdown

  return (
    <div className="bg-white w-full px-4 py-2 border-b shadow-sm">
      <nav className="container mx-auto flex justify-between items-center relative">
        {/* Left: Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="Logo" width={46} height={46} />
            <h1 className="text-lg font-bold">CookconneKt</h1>
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
                  className={`font-poppins text-xl ${isActive ? "text-orange-600" : ""
                    }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right: User or Auth Links */}
        <div className="hidden lg:flex items-center space-x-4 relative">
          {isLoggedIn ? (
            <>
              {/* User Avatar + Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <Image
                    src={userData.avatar}
                    alt="User Avatar"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                  <div className="text-sm text-left">
                    <p className="text-gray-600 font-medium">Hi!!!</p>
                    <p className="text-gray-800">{userData.name}</p>
                  </div>
                </button>

                {userDropdownOpen && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                    <Link
                      href="/dashboard"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/allJobs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setUserDropdownOpen(false)}
                    >
                      All Jobs
                    </Link>
                    <button
                      onClick={() => {
                        // handle logout here
                        setUserDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>

              {/* Notifications */}
              <Link href="">
                <div
                  className={`p-2 border border-gray-400 rounded-full hover:bg-gray-100 cursor-pointer ${pathname === "/notificationPage"
                    ? "bg-orange-500 text-white"
                    : ""
                    }`}
                >
                  <IoNotificationsOutline size={20} />
                </div>
              </Link>

              {/* Translate */}
              <div className="relative">
                <button
                  onClick={() => setLangOpen(!langOpen)}
                  className="flex items-center space-x-1 border border-gray-300 px-6 py-2 rounded-xl text-sm text-black hover:bg-gray-100"
                >
        
                  <MdOutlineTranslate size={14}  />
                  <span>Translate</span>
                  <svg
                    className="w-3 h-3 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {langOpen && (
                  <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded shadow z-50">
                    <button
                      onClick={() => {
                        // change to English
                        setLangOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      English
                    </button>
                    <button
                      onClick={() => {
                        // change to French
                        setLangOpen(false);
                      }}
                      className="block w-full px-4 py-2 text-left text-sm hover:bg-gray-100"
                    >
                      Français
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link href="/signUp">
                <button className="bg-orange-500 text-white px-5 py-2 rounded hover:bg-orange-600 text-sm">
                  Sign Up
                </button>
              </Link>
              <Link href="/signIn">
                <button className="border border-orange-500 text-orange-500 px-5 py-2 rounded hover:bg-orange-50 text-sm">
                  Login
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
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
        {menuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-t z-50 shadow-md lg:hidden">
            <ul className="flex flex-col space-y-2 px-4 py-3 text-gray-700">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-2 ${pathname === item.href
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

                    <Link href="/dashboard">
                      <span className="text-sm text-gray-700">Dashboard</span>
                    </Link>
                    <Link href="/allJobs">
                      <span className="text-sm text-gray-700">All Jobs</span>
                    </Link>
                    <button className="text-sm text-red-500 text-left">
                      Logout
                    </button>
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
