import { Link } from "react-router-dom";
import headerLogo from "../assets/header-logo.svg";

const Footer = () => {
  return (
    <div className="w-full px-2 sm:px-6">
      <div className="bg-[#011614] rounded-3xl sm:py-5 p-3 lg:px-5 overflow-hidden">
        {/* Top Section */}
        <div
          className="py-20 sm:py-24 bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col gap-8 bg-[url('/footer-bg-img-sm.jpg')] sm:bg-[url('/footer-bg-img.png')]"
          style={{
            backgroundPosition: "center top",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col justify-center items-center gap-6 px-4 text-center">
            <p className="text-white text-3xl sm:text-6xl leading-snug">
              Join the
            </p>
            <p className="text-white text-3xl sm:text-6xl leading-snug">
              Movement Today
            </p>
            <p className="text-[#C7CAC7] font-normal text-sm sm:text-base max-w-[320px] sm:max-w-none">
              KhetiVikaas is free, easy to use, and built for your growth
            </p>
          </div>

          <div className="flex justify-center gap-4 sm:gap-5 flex-wrap">
            <DownloadAppButton
              icon="/apple-white-icon.svg"
              text1="Download on the"
              text2="App Store"
              link="https://apps.apple.com/us/app/khetivikaas-ai/id6754886531"
            />
            <DownloadAppButton
              icon="/play-store-icon.svg"
              text1="Get It on"
              text2="Google Play"
              link="https://play.google.com/store/apps/details?id=com.app.khetivikaas"
            />
          </div>
        </div>

        {/* Divider Section */}
        <div className="py-8 mx-6 flex flex-col sm:flex-row justify-between items-center border-b border-[#5A5C5A]">
          <img
            src={headerLogo}
            alt="Logo"
            className="w-20 h-11 sm:w-28 sm:h-14"
          />
          <div className="flex gap-6 text-base text-white font-medium mt-4 sm:mt-0">
            <Link to="/about-us" className="hover:underline">
              About Us
            </Link>
            <Link to="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms-of-use" className="hover:underline">
              Terms of Service
            </Link>
          </div>
          <div className="w-24"></div>
        </div>

        {/* Bottom Text */}
        <div className="pt-7 pb-2 text-white font-medium text-sm text-center">
          <span>© Copyright 2025. KhetiVikaas</span>
        </div>
      </div>
      <div className="h-4"></div>
    </div>
  );
};

export default Footer;

function DownloadAppButton({
  icon,
  text1,
  text2,
  link,
}: {
  icon: string;
  text1: string;
  text2: string;
  link: string;
}) {
  return (
    <Link
      to={link}
      target="_blank"
      className="py-2 sm:py-3 px-4 sm:px-6 rounded-2xl border border-[#354342] flex items-center gap-2 bg-[#0E1E1C]/40 backdrop-blur-sm hover:scale-105 transition-transform duration-200"
    >
      <img src={icon} className="size-6 sm:size-9" loading="lazy" />
      <div className="flex flex-col gap-0.5 sm:gap-1">
        <p className="text-xs font-medium text-white">{text1}</p>
        <p className="text-sm sm:text-lg font-medium text-white">{text2}</p>
      </div>
    </Link>
  );
}
