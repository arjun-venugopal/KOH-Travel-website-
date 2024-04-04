"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }

    // Scroll to the target component
    const targetElement = document.getElementById(href.slice(1));
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center max-container font-extrabold text-2xl text-blue-500 padding-container relative z-30 py-5">
      <Link className="uppercase" href="/">
        koh
      </Link>
  
      <ul
        className={`flex flex-col md:flex-row gap-4 text-gray-500 font-semibold ${
          mobileMenuOpen
            ? "md:grid grid-cols-3 bg-white absolute top-16 p-5 z-50"
            : "hidden md:flex"
        }`}
      >
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-14 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={(event) => handleLinkClick(event, link.href)}
          >
            {link.label}
          </Link>
        ))}
      </ul>
  
      <div className="md:flexCenter hidden">
        <Button type="button" title="Login" variant="btn_dark_green" />
      </div>
  
      <Image
        onClick={toggleMobileMenu}
        src="menu.svg"
        alt="menu"
        width={22}
        height={22}
        className="inline-block cursor-pointer md:hidden"
      />
    </nav>
  );

};

export default Navbar;
