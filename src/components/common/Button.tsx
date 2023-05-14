import { FC, HTMLProps, ReactNode, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  name?: string;
  className?: HTMLProps<HTMLElement>["className"];
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  name,
  className,
  disabled,
}) => {
  const [effect, setEffect] = useState<boolean>(false);

  const handleClick = () => {
    setEffect(true);
    onClick();
  };

  return (
    <button
      data-testid="button"
      disabled={disabled}
      onAnimationEnd={() => setEffect(false)}
      className={`${
        disabled
          ? "bg-gray-300 dark:bg-gray-700"
          : "bg-blue-500 hover:shadow-lg hover:shadow-blue-200 dark:hover:shadow-blue-900"
      } text-white outline-none font-bold transition-all scale-100 w-full py-2 rounded-xl text-sm ${
        effect && "animate-wiggle"
      } ${className}`}
      onClick={handleClick}
      name={name}
    >
      {children}
    </button>
  );
};

export default Button;
