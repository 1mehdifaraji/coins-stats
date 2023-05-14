import { FC } from "react";

interface SwitchProps {
  toggle: boolean;
  onToggle: () => void;
}

const Switch: FC<SwitchProps> = ({ onToggle, toggle }) => {
  return (
    <div
      data-testid="switch"
      className={`w-10 h-6 flex items-center transition-colors duration-300 rounded-full cursor-pointer py-1 px-0.5 ${
        toggle
          ? "bg-green-400 dark:bg-green-600"
          : "bg-gray-200 dark:bg-gray-500"
      }`}
      onClick={onToggle}
    >
      <div
        data-testid="switch-toggle"
        className={`bg-white shadow-sm shadow-[rgba(0,0,0,0.2)] h-5 w-5 rounded-full transform duration-300 ease-in-out ${
          toggle && "translate-x-4"
        }`}
      />
    </div>
  );
};

export default Switch;
