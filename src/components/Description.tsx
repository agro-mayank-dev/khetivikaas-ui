import { useTranslation } from "react-i18next";

const Description = () => {
  const { t } = useTranslation('home');

  return (
    <div className="py-10 sm:py-20 px-5 sm:px-14">
      <p className="font-medium text-2xl sm:text-4xl text-[#022B27] text-center">
        {t("description.text")}
      </p>
    </div>
  );
};

export default Description;
