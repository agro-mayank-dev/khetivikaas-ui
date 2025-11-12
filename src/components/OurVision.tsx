import { useTranslation } from "react-i18next";

const OurVision = () => {
  const { t } = useTranslation("home");

  return (
    <div className="px-4 sm:px-8 md:px-12 lg:px-14 pt-10 sm:pt-16 lg:pt-20 pb-16 sm:pb-24 lg:pb-32 text-center">
      {/* Title */}
      <h3 className="font-medium text-3xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#022B27] mb-4">
        {t("ourtVision.title")}
      </h3>

      {/* Subtitle Text */}
      <div className="flex flex-col gap-2 sm:gap-3">
        <span className="font-medium text-lg sm:text-2xl md:text-3xl lg:text-[40px] text-[#919391]">
          {t("ourtVision.subtitle_1")}
        </span>

        <span className="text-[#022B27] font-medium text-lg sm:text-2xl md:text-3xl lg:text-[40px]">
          {t("ourtVision.subtitle_2")}
        </span>
      </div>

      {/* -------- Desktop / Tablet Layout -------- */}
      <div className="hidden sm:flex flex-row items-center justify-center gap-4 sm:gap-6 mt-0 sm:mt-5">
        <img
          src="/our-vision1.svg"
          alt={t("ourtVision.image_1_alt")}
          className="w-24 sm:w-32 md:w-40 lg:w-auto"
        />

        <div className="flex flex-col gap-2">
          <p className="text-[#022B27] font-medium text-lg sm:text-2xl md:text-3xl lg:text-[40px]">
            {t("ourtVision.paragraph_1")}
          </p>

          <p className="text-[#022B27] font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[40px]">
            {t("ourtVision.paragraph_2")}
          </p>
        </div>

        <img
          src="/our-vision2.svg"
          alt={t("ourtVision.image_2_alt")}
          className="w-24 sm:w-32 md:w-40 lg:w-auto"
        />
      </div>

      {/* -------- Mobile Layout -------- */}
      <div className="flex flex-col sm:hidden items-center justify-center mt-1 relative">
        <div className="flex flex-col gap-2 mb-6 relative">
          <p className="text-[#022B27] font-medium text-lg">
            {t("ourtVision.paragraph_1")}
          </p>
          <p className="text-[#022B27] font-semibold text-lg">
            {t("ourtVision.paragraph_2")}
          </p>
        </div>

        {/* Bottom images */}
        <div className="w-full flex justify-between items-center gap-6 absolute top-14">
          <img src="/our-vision1.svg" alt={t("ourtVision.image_1_alt")} className="w-20" />
          <img src="/our-vision2.svg" alt={t("ourtVision.image_2_alt")} className="w-20" />
        </div>
      </div>
    </div>
  );
};

export default OurVision;
