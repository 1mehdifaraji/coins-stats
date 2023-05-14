import DarkmodeToggle from "components/DarkmodeToggle";
import { FC } from "react";

interface HeaderProps {
  toggleDrawer: () => void;
  darkmode: boolean;
  toggleDarkmode: () => void;
}

const Header: FC<HeaderProps> = ({
  toggleDrawer,
  darkmode,
  toggleDarkmode,
}) => (
  <div className="flex items-center justify-between text-sm">
    <div onClick={toggleDrawer}>
      <svg className="w-5 h-3 cursor-pointer" viewBox="0 0 505 307">
        <path
          className="stroke-slate-400"
          fill="none"
          strokeWidth="33.333332"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M 18.666672 20.666687 L 310.333344 20.666687 M 18.666672 154 L 485.333313 154 M 193.666656 287.333344 L 485.333313 287.333344"
        />
      </svg>
    </div>
    <DarkmodeToggle darkmode={darkmode} toggleDarkmode={toggleDarkmode} />
  </div>
);

export default Header;
