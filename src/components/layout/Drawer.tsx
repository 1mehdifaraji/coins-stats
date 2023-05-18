import { ReactNode, FC, useEffect } from "react";

interface DrawerProps {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: any;
}

const Drawer: FC<DrawerProps> = ({ children, isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.removeProperty("overflow");
    }
  }, [isOpen]);
  return (
    <>
      <div
        data-testid="drawer-overlay"
        onClick={() => setIsOpen(false)}
        className={`transition-all z-20 fixed inset-0 duration-500 ${
          isOpen ? "visible opacity-100 cursor-pointer" : "invisible opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-black opacity-20" />
      </div>
      <aside
        data-testid="drawer"
        className={`transform left-0 top-0 h-full w-11/12 xs:w-10/12 sm:w-4/6 md:w-2/4 lg:w-2/6 bg-white dark:bg-darkLight fixed overflow-hidden transition-all duration-500 ease-in-out z-30 ${
          !isOpen && "-translate-x-full"
        }`}
      >
        {children}
        <div
          onClick={() => setIsOpen(false)}
          className="p-1 cursor-pointer absolute top-3 right-3"
        >
          <svg className="w-7 fill-slate-300" viewBox="0 0 24 24">
            <g>
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />{" "}
            </g>
          </svg>
        </div>
      </aside>
    </>
  );
};

export default Drawer;
