import React from "react";
import Card from "./Card";

const cardData1 = [
  {
    icon: "/crop-advisory-icon.svg",
    title: "Crop Advisory",
    text: `We provide guidance on crop health, pest management, and best farming practices tailored to your region.`,
  },
  {
    icon: "/mandi-rate-icon.svg",
    title: "Mandi Rates",
    text: "Know the market instantly — helping farmers sell their produce at fair prices and plan ahead effectively",
  },
  {
    icon: "/wheather-icon.svg",
    title: "Weather Updates",
    text: "Accurate, localized weather information to help you schedule sowing, irrigation, and harvesting efficiently",
  },
];

const cardData2 = [
  {
    icon: "/market-place-icon.svg",
    title: "Marketplace",
    text: "Connect with trusted buyers and sellers, compare prices, and access essential farming products all in one place",
  },
  {
    icon: "/community-icon.svg",
    title: "Community Support",
    text: "Join a thriving network of farmers and agronomists to exchange advice, tips, and real-world solutions",
  },
];

const OurFeatures = () => {
  return (
    <div className="p-6">
      <div className="bg-[#F3F3F3] flex flex-col py-5 sm:py-20 px-3 sm:px-9 gap-8 sm:gap-12 rounded-3xl sm:rounded-[34px]">
        <h1 className="text-[#022B27] font-medium text-3xl sm:text-6xl">
          Features
        </h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {cardData1.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cardData2.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
