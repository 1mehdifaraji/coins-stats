import { createContext, FC, ReactNode } from "react";
import { useLocalStorage } from "./hooks/useLocaleStorage";
import i18n from "./i18n";

interface ContextInitialState {
  darkmode: boolean;
  toggleDarkmode: () => void;
  lang: string;
  updateLang: (value: string) => void;
  walletAddresses: WalletAddress[];
  addWalletAddress: (walletAddress: WalletAddress) => void;
  removeWalletAddress: (walletAddressId: string) => void;
}

interface ContextProviderProps {
  children: ReactNode;
}

export const languages = [
  {
    id: 1,
    value: "en",
    label: "English 🇺🇸",
  },
  {
    id: 2,
    value: "fa",
    label: "Persian 🇮🇷",
  },
  {
    id: 3,
    value: "de",
    label: "German 🇩🇪",
  },
  {
    id: 4,
    value: "ar",
    label: "Arabic 🇦🇪",
  },
];

const initialState: ContextInitialState = {
  darkmode: false,
  toggleDarkmode: () => {},
  walletAddresses: [],
  removeWalletAddress: () => {},
  addWalletAddress: () => {},
  lang: "en",
  updateLang: () => {},
};

export const Context = createContext<ContextInitialState>(initialState);

const ContextProvider: FC<ContextProviderProps> = ({ children }) => {
  const [darkmode, setDarkmode] = useLocalStorage("darkmode", false);
  const [lang, setLang] = useLocalStorage("lang", "en");
  const [walletAddresses, setWalletAddresses] = useLocalStorage(
    "walletAddresses",
    []
  );

  const toggleDarkmode = () => {
    setDarkmode((prev: boolean) => {
      if (prev) document.documentElement.classList.remove("dark");
      else {
        document.documentElement.classList.add("dark");
      }
      return !prev;
    });
  };

  const removeWalletAddress = (walletAddressId: string) => {
    const filteredWalletAddresses = walletAddresses.filter(
      ({ id }: WalletAddress) => id !== walletAddressId
    );
    setWalletAddresses(filteredWalletAddresses);
  };

  const addWalletAddress = (walletAddress: WalletAddress) =>
    setWalletAddresses([...walletAddresses, walletAddress]);

  const updateLang = (lang: string) => {
    i18n.changeLanguage(lang);
    setLang(lang);
  };

  const contextValues = () => ({
    darkmode,
    toggleDarkmode,
    walletAddresses,
    removeWalletAddress,
    addWalletAddress,
    lang,
    updateLang,
  });

  return (
    <Context.Provider value={contextValues()}>{children}</Context.Provider>
  );
};

export default ContextProvider;
