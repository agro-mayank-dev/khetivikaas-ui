import { useTranslation } from "react-i18next";

const MakingDifference = () => {
  const { t } = useTranslation("home");

  return (
    <section className="py-10 sm:py-20 px-5 sm:px-14 flex flex-col gap-8 sm:gap-12">
      <h1 className="font-medium text-3xl sm:text-6xl text-[#022B27] text-center">
        {t("makingDifference.title")}
      </h1>

      <div className="flex flex-col sm:flex-row gap-6">
        <div className="md:w-1/2">
          {/* <img src="/market-place-img.svg" className="w-full h-full object-cover min-h-96" /> */}
          <img
            src="/market-place-img.png"
            className="w-full md:h-[35rem] md:rounded-3xl"
          />
        </div>
        <div className="flex flex-col gap-6 justify-between md:w-1/2">
          <img src="/wheat-img.svg" />
          <div className="font-medium text-sm sm:text-xl bg-[#011614] p-4 rounded-2xl flex flex-col gap-2">
            <p className="text-[#C7CAC7]">
              {t("makingDifference.description_1")}
            </p>
            <p className="text-[#A2A5A2]">
              {t("makingDifference.description_2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MakingDifference;
