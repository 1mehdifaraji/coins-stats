import { FC, ReactNode } from "react";
import ReactDOM from "react-dom";
import Text from "../common/Text";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children, title }) => {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <>
      <div
        onClick={onClose}
        className="z-40 fixed inset-0 animate-fadeIn cursor-pointer"
      >
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>
      <div
        data-testid="modal"
        className="bg-white dark:bg-darkLight shadow-lg shadow-[rgba(0,0,0,0.1)] rounded-3xl pt-12 pb-8 px-4 md:px-6 fixed overflow-auto animate-fadeInQuick z-50 top-1/3 w-3/4 md:w-2/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        {children}
        {title && (
          <Text className="absolute top-5 left-1/2 transform -translate-x-1/2 text-center text-sm font-bold text-gray-500">
            {title}
          </Text>
        )}
        <div
          onClick={onClose}
          className="p-1 cursor-pointer absolute top-3 right-3"
        >
          <svg className="w-7 fill-slate-300" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />{" "}
            </g>
          </svg>
        </div>
      </div>
    </>,
    document.body
  );
};

export default Modal;
