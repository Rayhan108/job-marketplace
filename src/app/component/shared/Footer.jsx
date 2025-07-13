import Image from "next/image";
import logo from '../../../assets/hat-chef.png'

import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram, FaXTwitter } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
const Footer = () => {
  return (
    <footer className={`bg-[#2C3E50] text-white py-10 px-5 `}>
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between md:items-start gap-10">

        {/* Logo and first address */}
        <div className="flex flex-col md:w-1/3">
          <div className="w-[379px]  mb-4 relative" style={{height: 176}}>
            <Image src={logo} alt="Logo" />
          </div>
          <div className="flex flex-col md:flex-row md:gap-20">
            <div>
              <h3 className="text-[#ABE7B4] font-semibold text-2xl mb-2">Address</h3>
              <address className={`text-xl not-italic leading-snug `}>
                6600 Headquarters Oaks Blvd Ste. 150, <br />
                Plano, TX. 75023.
              </address>
            </div>

            {/* Second address */}
            <div className="mt-8 md:mt-0 w-full">
              <h3 className="text-[#ABE7B4] font-semibold text-2xl mb-2">Address</h3>
              <address className={`not-italic leading-snug text-xl `}>
                123 Albacore Road, <br />
                Wolverton Air, <br />
                MK12 5AB, <br />
                United Kingdom
              </address>
            </div>
          </div>
        </div>

        {/* Pages and Socials */}
        <div className="md:w-1/3 flex flex-col md:flex-row md:justify-between gap-6">

          {/* Pages */}
          <div className="mt-16">
            <h3 className="uppercase font-semibold text-2xl mb-8">PAGES</h3>
            <ul className="text-xl space-y-5">
              <li>Home</li>
              <li>Interior</li>
              <li>Lawn & Garden</li>
              <li>Specialized & Other Services</li>
              <li>Articles</li>
              <li className="text-[#ABE7B4 ] font-semibold">Become a VIP pro contractor</li>
            </ul>
            <p className="mt-3 text-[19px]">We are not Yelp or Angie. We&apos;re built different.</p>
          </div>

          {/* Socials */}
          <div className="mt-16">
            <h3 className="uppercase font-semibold mb-8 text-2xl">SOCIALS</h3>
            <ul className="text-xl space-y-5">
              <li className="flex gap-2 items-center"><FaFacebookF className="text-[#ABE7B4] "/> Facebook</li>
              <li className="flex gap-2 items-center"><FaSquareInstagram  className="text-[#ABE7B4] "/> Instagram</li>
              <li className="flex gap-2 items-center"><FaXTwitter className="text-[#ABE7B4] "/>Twitter</li>
              <li className="flex gap-2 items-center"><FaLinkedinIn className="text-[#ABE7B4] " />LinkedIn</li>
              <li className="flex gap-2 items-center"><IoLogoYoutube className="text-[#ABE7B4] " />Youtube</li>
            </ul>
          </div>

        </div>

      </div>

      <div className="mt-10 border-t border-gray-500 pt-3 text-sm text-right">
        <p className="mt-1">&copy; 2025 Sparktech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
