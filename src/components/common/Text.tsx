import { FC, HTMLProps, ReactNode } from "react";

interface TextProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  noCursor?: boolean;
}

const Text: FC<TextProps> = ({ children, className, noCursor = true }) => (
  <div
    data-testid="text"
    className={`transition-colors duration-100 ${
      noCursor && "select-none cursor-default"
    } capitalize dark:text-white ${className}`}
  >
    {children}
  </div>
);

export default Text;
