// const BannerSection = () => {
//   return (
//     <div
//       className="mt-16 sm:mt-24 px-4 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-0 sm:gap-10 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/banner-bg-img.png')",
//       }}
//     >
//       {/* Left Section */}
//       <div className="py-10 sm:py-16 flex flex-col gap-8 md:text-left max-w-2xl">
//         <div className="flex flex-col gap-6">
//           <div className="py-2.5 px-5 rounded-3xl bg-[#4CAF501A] sm:mx-auto md:mx-0 w-fit">
//             <p className="text-xs sm:text-base font-medium text-[#17771B]">
//               Simple tools. Smarter farming. Greater profits
//             </p>
//           </div>

//           <h3 className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#022B27] leading-tight">
//             Your Digital Farming Companion
//           </h3>
//         </div>

//         <div className="flex flex-col gap-6">
//           <p className="text-[#022B27] font-medium text-lg sm:text-3xl">
//             Download KhetiVikaas
//           </p>
//           <div className="flex justify-start gap-4 sm:gap-6">
//             <DownloadAppButton
//               icon="/apple-black-icon.svg"
//               text1="Download on the"
//               text2="App Store"
//             />
//             <DownloadAppButton
//               icon="/play-store-icon.svg"
//               text1="Get It on"
//               text2="Google Play"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Right Section (Images) */}
//       <div className="sm:p-8 relative w-full md:w-1/2 lg:w-4/5 xl:w-1/2 flex justify-center items-center">
//         {/* Main mobile image */}
//         <img
//           src="/banner-mobile-img.png"
//           alt=""
//           className="w-11/12 sm:w-[60%] md:w-[85%] lg:w-auto lg:h-screen xl:h-auto xl:w-[80%] relative"
//         />

//         {/* Overlay Images */}
//         <img
//           src="/banner-crop-advisory-img.jpg"
//           alt=""
//           className="absolute rounded-2xl w-[55%] sm:w-[40%] md:w-[45%] lg:w-60 xl:w-2/4 h-32 lg:h-40 xl:h-40 bottom-2 sm:-bottom-2 md:-bottom-4 lg:bottom-16 xl:bottom-16 right-[45%] md:right-[15%] lg:right-[40%] xl:right-[40%] shadow-md"
//         />
//         <img
//           src="/banner-mandi-rates-img.png"
//           alt=""
//           className="absolute w-4/6 sm:w-[35%] md:w-[40%] lg:w-3/5 lg:h-24 xl:h-32 xl:w-72 top-[38%] sm:top-[45%] md:top-[48%] lg:top-[38%] xl:top-[38%] -right-4 sm:right-[8%] md:right-[12%] lg:right-0 xl:right-14"
//         />
//       </div>
//     </div>
//   );
// };

// export default BannerSection;

// function DownloadAppButton({
//   icon,
//   text1,
//   text2,
// }: {
//   icon: string;
//   text1: string;
//   text2: string;
// }) {
//   return (
//     <button className="bg-white py-2.5 sm:py-4 px-3 sm:px-6 lg:p-2 flex items-center gap-3 rounded-2xl border border-[#D9D9D9] hover:shadow-md transition-all">
//       <img
//         src={icon}
//         className="w-9 h-9 sm:size-11 lg:size-8 xl:size-11"
//         loading="lazy"
//       />
//       <div className="flex flex-col text-[#011614] font-medium text-left leading-tight">
//         <p className="text-sm sm:text-base">{text1}</p>
//         <p className="text-lg sm:text-2xl">{text2}</p>
//       </div>
//     </button>
//   );
// }


import React from "react";
import { motion } from "framer-motion";

const BannerSection = () => {
  return (
    <div
      className="mt-16 sm:mt-24 px-4 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-0 sm:gap-10 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/banner-bg-img.png')",
      }}
    >
      {/* Left Section */}
      <div className="py-10 sm:py-16 flex flex-col gap-8 md:text-left max-w-2xl">
        <div className="flex flex-col gap-6">
          <div className="py-2.5 px-5 rounded-3xl bg-[#4CAF501A] sm:mx-auto md:mx-0 w-fit">
            <p className="text-xs sm:text-base font-medium text-[#17771B]">
              Simple tools. Smarter farming. Greater profits
            </p>
          </div>

          <h3 className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#022B27] leading-tight">
            Your Digital Farming Companion
          </h3>
        </div>

        <div className="flex flex-col gap-6">
          <p className="text-[#022B27] font-medium text-lg sm:text-3xl">
            Download KhetiVikaas
          </p>
          <div className="flex justify-start gap-2 sm:gap-6">
            <DownloadAppButton
              icon="/apple-black-icon.svg"
              text1="Download on the"
              text2="App Store"
            />
            <DownloadAppButton
              icon="/play-store-icon.svg"
              text1="Get It on"
              text2="Google Play"
            />
          </div>
        </div>
      </div>

      {/* Right Section (Images with Animation) */}
      <div className="sm:p-8 relative w-full md:w-1/2 lg:w-4/5 xl:w-1/2 flex justify-center items-center">
        {/* Main mobile image */}
        <motion.img
          src="/banner-mobile-img.png"
          alt=""
          className="w-11/12 sm:w-[60%] md:w-[85%] lg:w-auto lg:h-screen xl:h-auto xl:w-[80%] relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.02 }}
        />

        {/* Overlay Image 1 */}
        <motion.img
          src="/banner-crop-advisory-img.jpg"
          alt=""
          className="absolute rounded-2xl w-[55%] sm:w-[40%] md:w-[45%] lg:w-60 xl:w-2/4 h-32 lg:h-40 xl:h-40 bottom-2 sm:-bottom-2 md:-bottom-4 lg:bottom-16 xl:bottom-16 right-[45%] md:right-[15%] lg:right-[40%] xl:right-[40%] shadow-md"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          whileHover={{ scale: 1.05, rotate: 1 }}
        />

        {/* Overlay Image 2 */}
        <motion.img
          src="/banner-mandi-rates-img.png"
          alt=""
          className="absolute w-4/6 sm:w-[35%] md:w-[40%] lg:w-3/5 lg:h-24 xl:h-32 xl:w-72 top-[38%] sm:top-[45%] md:top-[48%] lg:top-[38%] xl:top-[38%] -right-4 sm:right-[8%] md:right-[12%] lg:right-0 xl:right-14"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          whileHover={{ scale: 1.05, rotate: -1 }}
        />
      </div>
    </div>
  );
};

export default BannerSection;

function DownloadAppButton({
  icon,
  text1,
  text2,
}: {
  icon: string;
  text1: string;
  text2: string;
}) {
  return (
    <button className="bg-white w-full sm:w-auto py-2.5 sm:py-4 px-3 sm:px-6 lg:p-2 flex items-center gap-3 rounded-2xl border border-[#D9D9D9] hover:shadow-md transition-all">
      <img
        src={icon}
        className="size-7 sm:size-11 lg:size-8 xl:size-11"
        loading="lazy"
      />
      <div className="flex flex-col text-[#011614] font-medium text-left leading-tight">
        <p className="text-xs sm:text-base">{text1}</p>
        <p className="text-lg sm:text-2xl">{text2}</p>
      </div>
    </button>
  );
}


// import { motion } from "framer-motion";

// const BannerSection = () => {
//   return (
//     <div
//       className="mt-16 sm:mt-24 px-4 sm:px-10 lg:px-14 flex flex-col md:flex-row items-center justify-between gap-0 sm:gap-10 bg-cover bg-center bg-no-repeat"
//       style={{
//         backgroundImage: "url('/banner-bg-img.png')",
//       }}
//     >
//       {/* Left Section */}
//       <div className="py-10 sm:py-16 flex flex-col gap-8 md:text-left max-w-2xl">
//         <div className="flex flex-col gap-6">
//           <div className="py-2.5 px-5 rounded-3xl bg-[#4CAF501A] sm:mx-auto md:mx-0 w-fit">
//             <p className="text-xs sm:text-base font-medium text-[#17771B]">
//               Simple tools. Smarter farming. Greater profits
//             </p>
//           </div>

//           <h3 className="font-medium text-4xl sm:text-5xl lg:text-6xl text-[#022B27] leading-tight">
//             Your Digital Farming Companion
//           </h3>
//         </div>

//         <div className="flex flex-col gap-6">
//           <p className="text-[#022B27] font-medium text-lg sm:text-3xl">
//             Download KhetiVikaas
//           </p>
//           <div className="flex justify-start gap-4 sm:gap-6">
//             <DownloadAppButton
//               icon="/apple-black-icon.svg"
//               text1="Download on the"
//               text2="App Store"
//             />
//             <DownloadAppButton
//               icon="/play-store-icon.svg"
//               text1="Get It on"
//               text2="Google Play"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Right Section (Images with Floating Animation) */}
//       <div className="sm:p-8 relative w-full md:w-1/2 lg:w-4/5 xl:w-1/2 flex justify-center items-center">
//         {/* Main mobile image */}
//         <motion.img
//           src="/banner-mobile-img.png"
//           alt=""
//           className="w-11/12 sm:w-[60%] md:w-[85%] lg:w-auto lg:h-screen xl:h-auto xl:w-[80%] relative"
//           initial={{ opacity: 0, y: 40 }}
//           animate={{
//             opacity: 1,
//             y: [0, -10, 0], // gentle float up and down
//           }}
//           transition={{
//             duration: 4,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//           whileHover={{ scale: 1.03 }}
//         />

//         {/* Overlay Image 1 */}
//         <motion.img
//           src="/banner-crop-advisory-img.jpg"
//           alt=""
//           className="absolute rounded-2xl w-[55%] sm:w-[40%] md:w-[45%] lg:w-60 xl:w-2/4 h-32 lg:h-40 xl:h-40 bottom-2 sm:-bottom-2 md:-bottom-4 lg:bottom-16 xl:bottom-16 right-[45%] md:right-[15%] lg:right-[40%] xl:right-[40%] shadow-md"
//           initial={{ opacity: 0, x: -40 }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             y: [0, -8, 0], // subtle float
//           }}
//           transition={{
//             duration: 3.5,
//             delay: 0.5,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//           whileHover={{ scale: 1.05, rotate: 1 }}
//         />

//         {/* Overlay Image 2 */}
//         <motion.img
//           src="/banner-mandi-rates-img.png"
//           alt=""
//           className="absolute w-4/6 sm:w-[35%] md:w-[40%] lg:w-3/5 lg:h-24 xl:h-32 xl:w-72 top-[38%] sm:top-[45%] md:top-[48%] lg:top-[38%] xl:top-[38%] -right-4 sm:right-[8%] md:right-[12%] lg:right-0 xl:right-14"
//           initial={{ opacity: 0, x: 40 }}
//           animate={{
//             opacity: 1,
//             x: 0,
//             y: [0, -10, 0],
//           }}
//           transition={{
//             duration: 4.5,
//             delay: 0.7,
//             repeat: Infinity,
//             repeatType: "mirror",
//             ease: "easeInOut",
//           }}
//           whileHover={{ scale: 1.05, rotate: -1 }}
//         />
//       </div>
//     </div>
//   );
// };

// export default BannerSection;

// function DownloadAppButton({
//   icon,
//   text1,
//   text2,
// }: {
//   icon: string;
//   text1: string;
//   text2: string;
// }) {
//   return (
//     <button className="bg-white py-2.5 sm:py-4 px-3 sm:px-6 lg:p-2 flex items-center gap-3 rounded-2xl border border-[#D9D9D9] hover:shadow-md transition-all">
//       <img
//         src={icon}
//         className="w-9 h-9 sm:size-11 lg:size-8 xl:size-11"
//         loading="lazy"
//       />
//       <div className="flex flex-col text-[#011614] font-medium text-left leading-tight">
//         <p className="text-sm sm:text-base">{text1}</p>
//         <p className="text-lg sm:text-2xl">{text2}</p>
//       </div>
//     </button>
//   );
// }
