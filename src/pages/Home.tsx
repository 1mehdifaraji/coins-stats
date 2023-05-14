import { FC, useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useInView } from "react-intersection-observer";
import axios from "axios";
import { AnimatePresence } from "framer-motion";

import { capitalize } from "utils/utils";
import { Context, languages } from "utils/ContextProvider";

import Container from "components/layout/Container";
import Switch from "components/common/Switch";
import Input from "components/common/Input";
import Coin from "components/common/Coin";
import Text from "components/common/Text";
import CoinsLoading from "components/CoinsLoading";
import Error from "components/common/Error";
import Spinner from "components/common/Spinner";
import TableHeader from "components/TableHeader";
import DrawerContent from "components/DrawerContent";
import Header from "components/Header";

const LIMIT = 30;

const Home: FC = () => {
  const [toggleFavourites, setToggleFavourites] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [showDrawer, setShowDrawer] = useState<boolean>(false);
  const [orgData, setOrgData] = useState<Coin[]>([]);
  const [data, setData] = useState<Coin[]>([]);

  const { ref, inView } = useInView();
  const { t, i18n } = useTranslation();
  const {
    darkmode,
    toggleDarkmode,
    walletAddresses,
    removeWalletAddress,
    addWalletAddress,
    lang,
    updateLang,
  } = useContext(Context);
  const { hasNextPage, fetchNextPage, isFetchingNextPage, isLoading, isError } =
    useInfiniteQuery<any>(
      ["todos"],
      ({ pageParam = 1 }) => fetchCoins(pageParam),
      {
        refetchOnWindowFocus: false,
        getNextPageParam: (lastPage, allPages) =>
          lastPage?.length === LIMIT ? allPages?.length + 1 : undefined,
      }
    );

  const handleDarkmode = () => {
    if (darkmode) document.documentElement.classList.add("dark");
    else {
      document.documentElement.classList.remove("dark");
    }
  };

  const initSettings = () => {
    i18n.changeLanguage(lang);
    handleDarkmode();
    handleFavCoins(data);
  };

  useEffect(() => {
    initSettings();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  const fetchCoins = async (pageParam: number) => {
    const res = await axios.get(
      `${process.env.REACT_APP_URL}&per_page=${LIMIT}&page=${pageParam}&sparkline=false&locale=en`
    );
    const coins = res.data?.map((coin: Coin) => {
      const newCoin = { ...coin };
      newCoin.fav = false;
      return newCoin;
    });
    handleFavCoins(coins);
    return res.data;
  };

  const handleFavCoins = (coins: any) => {
    const savedCoins = localStorage.getItem("favCoins");
    if (savedCoins) {
      const parsedSavedCoins = JSON.parse(savedCoins);
      coins.forEach((newDataEach: any) => {
        parsedSavedCoins.forEach((savedCoinEach: any) => {
          if (newDataEach.name === savedCoinEach.name)
            newDataEach.fav = savedCoinEach.fav;
        });
      });
      setData((prev: Coin[]) => [...prev, ...coins]);
      setOrgData((prev: Coin[]) => [...prev, ...coins]);
    } else {
      localStorage.setItem("favCoins", JSON.stringify(coins));
      setData((prev: Coin[]) => [...prev, ...coins]);
      setOrgData((prev: Coin[]) => [...prev, ...coins]);
    }
  };

  const handleSearch = (value: string) => {
    let prevData = [...orgData];
    if (data?.length > 0) {
      if (value !== "") {
        prevData = prevData.filter((e) =>
          e?.name.toLowerCase().includes(value.toLowerCase())
        );
        if (prevData?.length > 0) setData(prevData);
      } else {
        setData(orgData);
      }
    }
    setSearchValue(value);
  };

  const addToFav = ({ name, fav }: { name: string; fav: boolean }) => {
    const coins = [...data];
    coins.map((localStateCoin) => {
      if (localStateCoin.name === name) localStateCoin.fav = !fav;
      return localStateCoin;
    });
    setData(coins);
    setOrgData(coins);
    localStorage.setItem("favCoins", JSON.stringify(coins));
  };

  return (
    <Container>
      <DrawerContent
        showDrawer={showDrawer}
        setShowDrawer={() => setShowDrawer((prev) => !prev)}
        t={t}
        walletAddresses={walletAddresses}
        addWalletAddress={addWalletAddress}
        removeWalletAddress={removeWalletAddress}
        languages={languages}
        lang={lang}
        updateLang={(value: string) => updateLang(value)}
      />

      <Header
        darkmode={darkmode}
        toggleDarkmode={toggleDarkmode}
        toggleDrawer={() => setShowDrawer(true)}
      />

      {!isError && (
        <>
          <div className="flex items-center justify-between mt-4 mb-2 text-sm">
            <Input
              spellCheck={false}
              placeholder={String(capitalize(t("search")))}
              className="py-1 mr-5 border-none font-bold dark:bg-dark"
              value={searchValue}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <div className="flex items-center space-x-2">
              <Text className="font-bold text-gray-500 text-xs">
                {t("favourites")}
              </Text>
              <Switch
                onToggle={() => setToggleFavourites((prev) => !prev)}
                toggle={toggleFavourites}
              />
            </div>
          </div>

          <TableHeader t={t} />
        </>
      )}

      <AnimatePresence>
        {isLoading ? (
          Array.from(Array(10).keys()).map((_, index: number) => {
            return <CoinsLoading key={index} />;
          })
        ) : isError ? (
          <Error t={t} />
        ) : (
          data.map(
            (
              {
                id,
                name,
                image,
                fav,
                current_price,
                price_change_percentage_24h,
                symbol,
              }: Coin,
              index: number
            ) => {
              return (
                <Coin
                  key={index}
                  symbol={symbol}
                  toggle={toggleFavourites}
                  price_change_percentage_24h={price_change_percentage_24h}
                  current_price={current_price}
                  fav={fav}
                  name={name}
                  image={image}
                  index={index}
                  onClick={() => addToFav({ name, fav })}
                />
              );
            }
          )
        )}
      </AnimatePresence>
      {searchValue?.length === 0 && !toggleFavourites && !isError && (
        <div
          ref={ref}
          className={`${!hasNextPage && "hidden"} flex justify-center my-6`}
        >
          {isFetchingNextPage && <Spinner />}
        </div>
      )}
    </Container>
  );
};

export default Home;
