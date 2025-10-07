// import React from "react";

// type Props = {
//   icon: string;
//   title: string;
//   text: string;
// };

// const Card = ({ icon, title, text }: Props) => {
//   return (
//     <div className="bg-white p-6 rounded-3xl flex flex-col gap-10">
//       <img src={icon} className="size-16" loading="lazy"/>
//       <div className="flex flex-col gap-6">
//         <p className="font-medium text-3xl text-[#023631]">{title}</p>
//         <span className="text-[#808380] text-base font-normal">{text}</span>
//       </div>
//     </div>
//   );
// };

// export default Card;

import React from "react";

type Props = {
  icon: string;
  title: string;
  text: string;
};

const Card = ({ icon, title, text }: Props) => {
  return (
    <div
      className="
        bg-white p-6 rounded-3xl flex flex-col gap-10
        shadow-md hover:shadow-2xl
        transform transition-all duration-500 ease-out
        hover:scale-105 hover:-translate-y-2
        hover:bg-gradient-to-br hover:from-[#f9fff9] hover:to-[#eafbea]
      "
    >
      <div
        className="
          size-16 transition-transform duration-500 ease-in-out
          group-hover:scale-110 group-hover:rotate-6
        "
      >
        <img
          src={icon}
          alt={title}
          className="w-full h-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col gap-4">
        <p className="font-semibold text-2xl text-[#023631] transition-colors duration-300 group-hover:text-[#056f5e]">
          {title}
        </p>
        <span className="text-[#808380] text-base font-normal transition-opacity duration-500 group-hover:opacity-90">
          {text}
        </span>
      </div>
    </div>
  );
};

export default Card;
