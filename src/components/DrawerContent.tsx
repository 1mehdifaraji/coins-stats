import { FC, useState } from "react";
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
          />
          <Input
            value={walletAddressInput}
            onChange={(e) => setWalletAddressInput(e.target.value)}
            placeholder={String(capitalize(t("address")))}
            name="wallet-address"
            className="mt-2"
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
          <div
            className={`${
              walletAddresses?.length > 1 && "h-64 overflow-y-scroll pb-10"
            } text-sm font-bold mt-2 px-3`}
          >
            {walletAddresses?.map(({ title, value, id }, index) => {
              return (
                <div
                  key={index}
                  className={`flex items-start justify-between relative border border-gray-100 dark:border-gray-600 rounded-xl p-2 ${
                    index !== 0 && "mt-2"
                  }`}
                >
                  <div className="w-11/12 break-words">
                    <Text className="text-gray-500 dark:text-gray-300">
                      {title}
                    </Text>
                    <Text className="mt-1">{value}</Text>
                  </div>
                  <div className="flex items-center absolute right-2 top-2">
                    <div
                      onClick={() => navigator.clipboard.writeText(value)}
                      className="cursor-pointer"
                    >
                      <svg
                        className="w-4 fill-blue-500 mr-3"
                        viewBox="0 0 50.788 50.723"
                      >
                        <path
                          d="M8.213,49.723A8.222,8.222,0,0,1,0,41.511V17A8.222,8.222,0,0,1,8.213,8.787H32.724A8.222,8.222,0,0,1,40.936,17V41.511a8.222,8.222,0,0,1-8.212,8.213ZM4,17V41.511a4.217,4.217,0,0,0,4.214,4.212H32.724a4.217,4.217,0,0,0,4.212-4.212V17a4.218,4.218,0,0,0-4.212-4.213H8.213A4.218,4.218,0,0,0,4,17ZM41.575,36.936a4.219,4.219,0,0,0,4.214-4.213V11.245A7.254,7.254,0,0,0,38.543,4H17.064a4.217,4.217,0,0,0-4.212,4.214h-4A8.221,8.221,0,0,1,17.064,0H38.543A11.258,11.258,0,0,1,49.788,11.245V32.723a8.221,8.221,0,0,1-8.213,8.212Z"
                          transform="translate(0.5 0.5)"
                          strokeMiterlimit="10"
                          strokeWidth="1"
                        />
                      </svg>
                    </div>
                    <div
                      onClick={() => removeWalletAddress(id)}
                      className="cursor-pointer"
                    >
                      <svg
                        className="w-4 fill-red-500 scale-90"
                        viewBox="0 0 18.874 22.765"
                      >
                        <g
                          id="Group_598"
                          data-name="Group 598"
                          transform="translate(-481.633 -194.294)"
                        >
                          <g
                            id="Group_11"
                            data-name="Group 11"
                            transform="translate(481.633 194.294)"
                          >
                            <path
                              id="Path_23"
                              data-name="Path 23"
                              d="M1099.56,365.872a.667.667,0,0,0-.732-.592l-4.949.523a4.191,4.191,0,0,0-8.232.87l-4.362.461a.666.666,0,0,0,.069,1.327.628.628,0,0,0,.071,0l11.986-1.267h0l5.552-.587A.665.665,0,0,0,1099.56,365.872Zm-10.029-1.823a2.862,2.862,0,0,1,3,1.9l-5.539.585A2.869,2.869,0,0,1,1089.531,364.049Z"
                              transform="translate(-1080.69 -362.702)"
                            />
                            <path
                              id="Path_24"
                              data-name="Path 24"
                              d="M1098.949,376.405a.666.666,0,0,0-.724.6l-1.1,11.919a.541.541,0,0,0,0,.061,2.775,2.775,0,0,1-2.772,2.771h-5.254a2.775,2.775,0,0,1-2.771-2.771.571.571,0,0,0,0-.061l-1.1-11.919a.665.665,0,0,0-1.325.122l1.1,11.89a4.108,4.108,0,0,0,4.1,4.07h5.254a4.108,4.108,0,0,0,4.1-4.07l1.1-11.89A.664.664,0,0,0,1098.949,376.405Z"
                              transform="translate(-1082.47 -370.324)"
                            />
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <Container>
          <Text className="font-bold text-gray-500 mt-7">{t("language")}</Text>
          <div className="flex items-center justify-between text-sm mt-2">
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
          </div>
          <Footer />
        </Container>
      </Drawer>
    </>
  );
};

export default DrawerContent;
