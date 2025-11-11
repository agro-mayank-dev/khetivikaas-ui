import { useTranslation } from "react-i18next";

const LANGUAGES = [
  { code: "en", label: "🇬🇧 English" },
  { code: "hi", label: "🇮🇳 हिन्दी" },
  { code: "pa", label: "🪶 ਪੰਜਾਬੀ" },
];

interface Props {
  onSelect: (code: string) => void;
}

export const LanguageDropdown = ({ onSelect }: Props) => {
  const { i18n } = useTranslation();

  return (
    <div className="absolute right-0 mt-2 w-36 bg-white border border-green-200 rounded-lg shadow-lg z-50">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          onClick={() => onSelect(lang.code)}
          className={`block w-full text-left px-4 py-2 hover:bg-green-50 ${
            i18n.language === lang.code
              ? "text-green-700 font-semibold"
              : "text-gray-700"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};
