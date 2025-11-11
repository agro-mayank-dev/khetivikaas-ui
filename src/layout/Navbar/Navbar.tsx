import { useEffect, useRef, useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import headerLogo from "../../assets/header-logo.svg";

import { LanguageDropdown } from "./LanguageDropdown";
import { MobileMenu } from "./MobileMenu";

const MENU_ITEMS = [
  { label: "Home", id: "home" },
  { label: "Our Vision", id: "vision" },
  { label: "Features", id: "feature" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDesktopLangOpen, setIsDesktopLangOpen] = useState(false);
  const [isMobileLangOpen, setIsMobileLangOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);
  const desktopLangRef = useRef<HTMLDivElement | null>(null);
  const mobileLangRef = useRef<HTMLDivElement | null>(null);
  const { i18n } = useTranslation();

  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;
    if (
      !menuRef.current?.contains(target) &&
      !desktopLangRef.current?.contains(target) &&
      !mobileLangRef.current?.contains(target)
    ) {
      setIsMenuOpen(false);
      setIsDesktopLangOpen(false);
      setIsMobileLangOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Change Language
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
    setIsDesktopLangOpen(false);
    setIsMobileLangOpen(false);
  };

  // Scroll handler
  const handleScroll = (id: string) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const section = document.getElementById(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-[#DBE8DC] py-5 px-6 sm:px-20 flex justify-between items-center bg-white z-50 shadow-sm">
      {/* Logo */}
      <img
        src={headerLogo}
        alt="Logo"
        className="w-20 h-11 sm:w-28 sm:h-14 cursor-pointer"
        onClick={() => handleScroll("home")}
      />

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-lg font-normal items-center">
        {MENU_ITEMS.map((item) => (
          <button
            key={item.id}
            onClick={() => handleScroll(item.id)}
            className="text-[#808182] hover:text-black transition-colors duration-200"
          >
            {item.label}
          </button>
        ))}
      </div>

      {/* Desktop Language Selector */}
      <div className="hidden md:block relative" ref={desktopLangRef}>
        <button
          className="flex items-center justify-center p-2 rounded-full hover:bg-green-100 transition"
          onClick={() => setIsDesktopLangOpen((prev) => !prev)}
        >
          <Globe size={24} className="text-green-700" />
        </button>
        {isDesktopLangOpen && <LanguageDropdown onSelect={changeLanguage} />}
      </div>

      {/* Mobile Menu + Lang */}
      <div className="md:hidden flex items-center">
        <div className="relative" ref={mobileLangRef}>
          <button
            className="flex items-center justify-center p-2 rounded-full hover:bg-green-100 transition"
            onClick={() => setIsMobileLangOpen((prev) => !prev)}
          >
            <Globe size={26} className="text-green-700" />
          </button>
          {isMobileLangOpen && <LanguageDropdown onSelect={changeLanguage} />}
        </div>

        {/* Hamburger */}
        <div className="relative ml-3" ref={menuRef}>
          <button onClick={() => setIsMenuOpen((prev) => !prev)}>
            <img src="/hamburger-icon.svg" alt="Menu" className="size-10" />
          </button>
          <MobileMenu
            isMenuOpen={isMenuOpen}
            onItemClick={(id) => handleScroll(id)}
          />
        </div>
      </div>
    </nav>
  );
};
