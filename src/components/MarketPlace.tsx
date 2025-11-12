import { useTranslation } from "react-i18next";
import Card from "./Card";

const MarketPlace = () => {
  const { t } = useTranslation('home');

  const cardData = [
    {
      icon: "/zero-commission-icon.svg",
      title: t("marketplace.cards.zeroCommission.title"),
      text: t("marketplace.cards.zeroCommission.text"),
    },
    {
      icon: "/fair-prices-icon.svg",
      title: t("marketplace.cards.fairPrices.title"),
      text: t("marketplace.cards.fairPrices.text"),
    },
    {
      icon: "/local-first-icon.svg",
      title: t("marketplace.cards.localFirst.title"),
      text: t("marketplace.cards.localFirst.text"),
    },
    {
      icon: "/endless-icon.svg",
      title: t("marketplace.cards.endlessOpportunities.title"),
      text: t("marketplace.cards.endlessOpportunities.text"),
    },
  ];

  return (
    <section className="bg-[#F3F3F3] flex flex-col gap-8 sm:gap-14 py-10 sm:py-20 px-5 sm:px-14">
      <h1 className="font-medium text-3xl sm:text-6xl text-[#022B27] text-center">
        {t("marketplace.title")}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cardData.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
};

export default MarketPlace;
