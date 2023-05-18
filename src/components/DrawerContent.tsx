import { FC, KeyboardEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { capitalize } from "../utils/utils";

import Container from "./layout/Container";
import Input from "../components/common/Input";
import Modal from "./layout/Modal";
import Button from "../components/common/Button";
import Drawer from "./layout/Drawer";
import Text from "../components/common/Text";
import Language from "./common/Language";
import Footer from "./layout/Footer";
import WalletAddress from "./WalletAddress";

interface DrawerContentProps {
  showDrawer: boolean;
  setShowDrawer: () => void;
  languages: Language[];
  walletAddresses: WalletAddress[];
  addWalletAddress: (walletAddress: WalletAddress) => void;
  removeWalletAddress: (walletAddressId: string) => void;
  lang: string;
  updateLang: (value: string) => void;
  t: any;
}

const DrawerContent: FC<DrawerContentProps> = ({
  showDrawer,
  setShowDrawer,
  t,
  walletAddresses,
  addWalletAddress,
  removeWalletAddress,
  lang,
  languages,
  updateLang,
}) => {
  const [walletAddressInput, setWalletAddressInput] = useState<string>("");
  const [walletAddressTitleInput, setWalletAddressTitleInput] =
    useState<string>("");
  const [walletAddressModal, setWalletAddressModal] = useState<boolean>(false);

  const clearInputValues = () => {
    setWalletAddressInput("");
    setWalletAddressTitleInput("");
  };

  const submitWalletAddress = () => {
    if (walletAddressTitleInput?.length && walletAddressInput?.length)
      addWalletAddress({
        id: uuidv4(),
        title: walletAddressTitleInput,
        value: walletAddressInput,
      });
    setWalletAddressModal(false);
    clearInputValues();
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (walletAddressInput?.length > 0 && walletAddressTitleInput?.length > 0) {
      if (e.key === "Enter") submitWalletAddress();
    }
  };

  return (
    <>
      <Modal
        title={t("add-wallet-address")}
        isOpen={walletAddressModal}
        onClose={() => setWalletAddressModal(false)}
      >
        <div className="px-3">
          <Input
            className="mt-4"
            value={walletAddressTitleInput}
            onChange={(e) => setWalletAddressTitleInput(e.target.value)}
            placeholder={String(capitalize(t("wallet-address-title")))}
            name="wallet-address-title"
            maxLength={20}
            onKeyDown={handleKeyPress}
          />
          <Input
            value={walletAddressInput}
            onChange={(e) => setWalletAddressInput(e.target.value)}
            placeholder={String(capitalize(t("address")))}
            name="wallet-address"
            className="mt-2"
            onKeyDown={handleKeyPress}
          />
          <Button
            disabled={
              !(
                walletAddressInput?.length > 0 &&
                walletAddressTitleInput?.length > 0
              )
            }
            className="mt-2"
            onClick={submitWalletAddress}
            name="add-wallet-address"
          >
            <Text noCursor={false}>{t("add-address")}</Text>
          </Button>
        </div>
      </Modal>
      <Drawer isOpen={showDrawer} setIsOpen={setShowDrawer}>
        <Container>
          <img
            alt="logo"
            className="w-10 object-cover rounded-2xl mt-5"
            src={require("../assets/transparent.png")}
          />
          <div className="flex items-center space-x-2 font-bold mt-6">
            <Text className="text-gray-500">{t("wallet-addresses")}</Text>
            <span className="text-gray-500 dark:text-gray-300">
              {walletAddresses?.length > 0 && `(${walletAddresses.length})`}
            </span>
            <div
              onClick={() => setWalletAddressModal(true)}
              className="text-blue-400 text-lg cursor-pointer"
            >
              +
            </div>
          </div>
          {walletAddresses?.length === 0 && (
            <Text className="text-gray-400 dark:text-gray-300 text-sm mt-2 font-bold">
              {t("no-addresses-found")}
            </Text>
          )}
        </Container>

        {walletAddresses?.length > 0 && (
          <ul
            className={`${
              walletAddresses?.length > 1 && "h-64 overflow-y-scroll pb-10"
            } text-sm font-bold mt-2 px-3`}
          >
            {walletAddresses?.map(({ title, value, id }, index) => {
              return (
                <WalletAddress
                  key={id}
                  id={id}
                  index={index}
                  onCopy={() => navigator.clipboard.writeText(value)}
                  onDelete={() => removeWalletAddress(id)}
                  title={title}
                  value={value}
                />
              );
            })}
          </ul>
        )}

        <Container>
          <Text className="font-bold text-gray-500 mt-7">{t("language")}</Text>
          <ul className="flex items-center justify-between text-sm mt-2">
            {languages?.map(({ id, value, label }) => {
              return (
                <Language
                  key={id}
                  currentLanguage={lang}
                  label={label}
                  value={value}
                  onClick={() => updateLang(value)}
                />
              );
            })}
          </ul>
          <Footer />
        </Container>
      </Drawer>
    </>
  );
};

export default DrawerContent;
