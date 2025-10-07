// import React, { useState } from "react";
// import headerLogo from "../assets/header-logo.svg";
// import { NavLink } from "react-router-dom";

// const links = [
//   { link: "/", text: "Home" },
//   { link: "/vision", text: "Our Vision" },
//   { link: "/feature", text: "Features" },
// ];

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <nav className="fixed top-0 left-0 w-full border-b border-[#DBE8DC] py-5 px-6 sm:px-20 flex justify-between items-center bg-white z-50 shadow-sm">
//         <img
//           src={headerLogo}
//           alt="Logo"
//           className="w-20 h-11 sm:w-28 sm:h-14"
//         />

//         <div className="hidden md:flex gap-6 text-lg font-normal">
//           {links.map(({ link, text }) => (
//             <NavLink
//               key={link}
//               to={link}
//               className={({ isActive }) =>
//                 `transition-colors duration-200 ${
//                   isActive
//                     ? "font-semibold text-black"
//                     : "text-[#808182] hover:text-black"
//                 }`
//               }
//             >
//               {text}
//             </NavLink>
//           ))}
//         </div>

//         <button className="hidden md:block p-4 rounded-[86px] bg-[#4CAF50] text-white text-base font-medium">
//           Download App
//         </button>

//         <div className="relative md:hidden">
//           <button
//             className="flex items-center"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <img src="/hamburger-icon.svg" alt="Menu" className="size-10" />
//           </button>

//           {isOpen && (
//             <div className="absolute top-12 right-0 w-32 bg-white border border-[#DBE8DC] shadow-md rounded-lg p-2 animate-fadeIn z-50">
//               {links.map(({ link, text }) => (
//                 <NavLink
//                   key={link}
//                   to={link}
//                   onClick={() => setIsOpen(false)}
//                   className={({ isActive }) =>
//                     `block py-2 text-lg ${
//                       isActive ? "font-semibold text-black" : "text-[#808182]"
//                     } hover:bg-gray-100 rounded`
//                   }
//                 >
//                   {text}
//                 </NavLink>
//               ))}
//             </div>
//           )}
//         </div>
//       </nav>
//     </>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import headerLogo from "../assets/header-logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Smooth scroll handler
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full border-b border-[#DBE8DC] py-5 px-6 sm:px-20 flex justify-between items-center bg-white z-50 shadow-sm">
      <img
        src={headerLogo}
        alt="Logo"
        className="w-20 h-11 sm:w-28 sm:h-14 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      {/* Desktop Links */}
      <div className="hidden md:flex gap-6 text-lg font-normal">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-[#808182] hover:text-black transition-colors duration-200"
        >
          Home
        </button>
        <button
          onClick={() => handleScroll("vision")}
          className="text-[#808182] hover:text-black transition-colors duration-200"
        >
          Our Vision
        </button>
        <button
          onClick={() => handleScroll("feature")}
          className="text-[#808182] hover:text-black transition-colors duration-200"
        >
          Features
        </button>
      </div>

      {/* Download Button */}
      <button className="hidden md:block p-4 rounded-[86px] bg-[#4CAF50] text-white text-base font-medium">
        Download App
      </button>

      {/* Mobile Menu */}
      <div className="relative md:hidden">
        <button
          className="flex items-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          <img src="/hamburger-icon.svg" alt="Menu" className="size-10" />
        </button>

        {isOpen && (
          <div className="absolute top-12 right-0 w-36 bg-white border border-[#DBE8DC] shadow-md rounded-lg p-2 animate-fadeIn z-50">
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="block w-full text-left py-2 text-lg text-[#808182] hover:bg-gray-100 rounded"
            >
              Home
            </button>
            <button
              onClick={() => handleScroll("vision")}
              className="block w-full text-left py-2 text-lg text-[#808182] hover:bg-gray-100 rounded"
            >
              Our Vision
            </button>
            <button
              onClick={() => handleScroll("feature")}
              className="block w-full text-left py-2 text-lg text-[#808182] hover:bg-gray-100 rounded"
            >
              Features
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
