import { useTranslation } from "react-i18next";

interface Props {
  isMenuOpen: boolean;
  onItemClick: (id: string) => void;
}

const MENU_ITEMS = [
  { label: "navbar.menu.home", id: "home" },
  { label: "navbar.menu.vision", id: "vision" },
  { label: "navbar.menu.features", id: "feature" },
];

export const MobileMenu = ({ isMenuOpen, onItemClick }: Props) => {
  const { t } = useTranslation('home');

  if (!isMenuOpen) return null;

  return (
    <div className="absolute top-12 right-0 w-36 bg-white border border-[#DBE8DC] shadow-md rounded-lg p-2 animate-fadeIn z-50">
      {MENU_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => onItemClick(item.id)}
          className="block w-full text-left py-2 text-lg text-[#808182] hover:bg-gray-100 rounded"
        >
          {t(item.label)}
        </button>
      ))}
    </div>
  );
};
