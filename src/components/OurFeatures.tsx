import { useTranslation } from "react-i18next";
import Card from "./Card";

const ICONS = [
  "/crop-advisory-icon.svg",
  "/mandi-rate-icon.svg",
  "/wheather-icon.svg",
  "/market-place-icon.svg",
  "/community-icon.svg",
  "/record-management-icon.svg",
];

const OurFeatures = () => {
  const { t } = useTranslation("home");

  const content = {
    title: t("ourFeatures.title"),
    features: t("ourFeatures.features", { returnObjects: true }) as [],
  };

 return (
    <div className="p-6">
      <div className="bg-[#F3F3F3] flex flex-col py-5 sm:py-20 px-3 sm:px-9 gap-8 sm:gap-12 rounded-3xl sm:rounded-[34px]">
        <h1 className="text-[#022B27] font-medium text-3xl sm:text-6xl">
          {content.title}
        </h1>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6">
          {content.features.map((feature: any, index: number) => (
            <Card
              key={index}
              icon={ICONS[index]}
              title={feature.title}
              text={feature.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;
