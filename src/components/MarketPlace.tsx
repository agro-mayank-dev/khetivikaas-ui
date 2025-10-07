import Card from "./Card";

const cardData = [
  {
    icon: "/zero-commission-icon.svg",
    title: "Zero Commission for Individuals",
    text: "Farmers keep every rupee they earn.",
  },
  {
    icon: "/fair-prices-icon.svg",
    title: "Fair Prices",
    text: "Compare offers and choose the best value for your produce.",
  },
  {
    icon: "/local-first-icon.svg",
    title: "Local First",
    text: "Discover buyers and sellers from your region.",
  },
  {
    icon: "/endless-icon.svg",
    title: "Endless Opportunities",
    text: "List freely and connect with more buyers and sellers",
  },
];

const MarketPlace = () => {
  return (
    <section className="bg-[#F3F3F3] flex flex-col gap-8 sm:gap-14 py-10 sm:py-20 px-5 sm:px-14">
      <h1 className="font-medium text-3xl sm:text-6xl text-[#022B27] text-center">
        Marketplace – Trade with Trust, Grow with Freedom
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
