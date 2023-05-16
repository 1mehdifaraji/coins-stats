import { FC } from "react";

interface LanguageProps {
  onClick?: () => void;
  currentLanguage: string;
  label: string;
  value: string;
}

const Language: FC<LanguageProps> = ({
  onClick,
  value,
  label,
  currentLanguage,
}) => (
  <li
    data-testid="language"
    onClick={onClick}
    className={`cursor-pointer rounded-lg p-1 dark:text-white text-dark ${
      value === currentLanguage && "border-2 border-blue-500 font-bold"
    }`}
  >
    {label}
  </li>
);

export default Language;
