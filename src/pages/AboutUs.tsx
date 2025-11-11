import { Leaf, Sprout, Tractor } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function AboutUs() {
  const { t } = useTranslation("about");

  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-16 px-6 sm:px-10">
      <div className="max-w-5xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-green-700 mb-2 flex items-center justify-center gap-2">
            <Sprout className="text-green-600" size={50} />
            {t("title")}
          </h1>
          <p className="text-gray-600 text-lg">{t("tagline")}</p>
        </div>

        {/* Intro Section */}
        <section className="mb-12 bg-white shadow-md rounded-2xl p-6 border border-green-100">
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("intro1", { appName: "Kheti Vikaas" })}
          </p>
          <p className="text-gray-700 text-lg mt-4 leading-relaxed">
            {t("intro2")}
          </p>
        </section>

        {/* Vision Section */}
        <section className="mb-12 bg-green-50 border-l-4 border-green-500 rounded-2xl p-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-3 flex items-center gap-2">
            <Leaf size={24} className="text-green-600" />
            {t("visionTitle")}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {t("visionText")}
          </p>
        </section>

        {/* What We Offer */}
        <section className="bg-white shadow-md rounded-2xl p-6 border border-green-100">
          <h2 className="text-2xl font-semibold text-green-700 mb-4 flex items-center gap-2">
            <Tractor size={24} className="text-green-600" />
            {t("offerTitle")}
          </h2>
          <ul className="space-y-3 text-gray-700 text-lg">
            <li>{t("offerList.cropAdvisory")}</li>
            <li>{t("offerList.mandiRates")}</li>
            <li>{t("offerList.weatherUpdates")}</li>
            <li>{t("offerList.marketplace")}</li>
            <li>{t("offerList.aiDiagnosis")}</li>
            <li>{t("offerList.communitySupport")}</li>
            <li>{t("offerList.safeSpace")}</li>
            <li>{t("offerList.peerEcosystem")}</li>
          </ul>
        </section>

        {/* Footer Message */}
        <div className="text-center mt-12 text-gray-600">
          <p className="text-lg">{t("footer")}</p>
        </div>
      </div>
    </div>
  );
}
