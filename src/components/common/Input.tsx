import { ChangeEventHandler, FC, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<InputProps> = ({ onChange, className, ...props }) => (
  <input
    spellCheck={false}
    className={`block border dark:border-gray-600 bg-white dark:bg-darkLight transition-colors duration-100 caret-black dark:caret-white rounded-xl w-full p-2 text-sm placeholder:text-gray-300 dark:placeholder:text-gray-400 outline-none text-dark dark:text-white ${className}`}
    onChange={(e) => onChange(e)}
    type="text"
    {...props}
  />
);

export default Input;
