import { FC } from "react";
import { motion } from "framer-motion";
import { handleDecimals } from "../../utils/utils";

interface CoinProps {
  toggle: boolean;
  fav: boolean;
  image: string;
  name: string;
  symbol: string;
  onClick: () => void;
  index: number;
  price_change_percentage_24h: number;
  current_price: number;
}

const Coin: FC<CoinProps> = ({
  toggle,
  fav,
  onClick,
  index,
  image,
  name,
  symbol,
  price_change_percentage_24h,
  current_price,
}) => (
  <motion.li
    initial={{ y: 40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.55, ease: "easeIn" }}
    exit={{ y: -40, opacity: 0 }}
    data-testid="coin"
    className={`items-center py-3 border-b border-gray-200 dark:border-gray-800 transition-colors duration-100 text-left text-dark dark:text-white text-sm ${
      toggle && !fav ? "hidden" : "flex"
    }`}
  >
    <div>
      <div className="flex items-center w-60">
        <div className="flex items-center">
          <div
            onClick={onClick}
            className="translate-y-[0.8px] cursor-pointer p-[0.5px]"
          >
            {fav ? (
              <svg
                data-testid="star-svg"
                className="fill-yellow-300 w-4 h-4"
                viewBox="0 0 700 700"
              >
                <g>
                  <path d="m436.41 188.16 193.59 27.215-139.33 137.14 33.992 192.53-173.49-90.16-172.65 91.84 32.145-192.86-140.67-135.8 193.31-29.062 85.68-175.73z" />
                  <use x="70" y="644" xlinkHref="#t" />
                  <use x="90.550781" y="644" xlinkHref="#d" />
                  <use x="104.359375" y="644" xlinkHref="#a" />
                  <use x="123.347656" y="644" xlinkHref="#k" />
                  <use x="142.242188" y="644" xlinkHref="#c" />
                  <use x="155.628906" y="644" xlinkHref="#a" />
                  <use x="174.617188" y="644" xlinkHref="#j" />
                  <use x="204.410156" y="644" xlinkHref="#i" />
                  <use x="224.453125" y="644" xlinkHref="#h" />
                  <use x="252.453125" y="644" xlinkHref="#g" />
                  <use x="271.796875" y="644" xlinkHref="#f" />
                  <use x="288.394531" y="644" xlinkHref="#b" />
                  <use x="307.632812" y="644" xlinkHref="#e" />
                  <use x="327.5625" y="644" xlinkHref="#s" />
                  <use x="70" y="672" xlinkHref="#r" />
                  <use x="82.183594" y="672" xlinkHref="#d" />
                  <use x="95.992188" y="672" xlinkHref="#b" />
                  <use x="115.226562" y="672" xlinkHref="#q" />
                  <use x="154.152344" y="672" xlinkHref="#c" />
                  <use x="167.535156" y="672" xlinkHref="#p" />
                  <use x="187.46875" y="672" xlinkHref="#a" />
                  <use x="216.207031" y="672" xlinkHref="#o" />
                  <use x="239.640625" y="672" xlinkHref="#b" />
                  <use x="258.878906" y="672" xlinkHref="#n" />
                  <use x="278.8125" y="672" xlinkHref="#e" />
                  <use x="308.492188" y="672" xlinkHref="#m" />
                  <use x="329.015625" y="672" xlinkHref="#d" />
                  <use x="342.820312" y="672" xlinkHref="#b" />
                  <use x="362.058594" y="672" xlinkHref="#l" />
                  <use x="371.65625" y="672" xlinkHref="#a" />
                  <use x="390.648438" y="672" xlinkHref="#f" />
                  <use x="407.242188" y="672" xlinkHref="#c" />
                </g>
              </svg>
            ) : (
              <svg
                data-testid="star-svg"
                className="fill-gray-500 w-4 h-4"
                viewBox="0 0 700 700"
              >
                <g>
                  <path d="m349.44 101.86 51.855 103.82 9.2383 18.312 20.383 2.8555 115.08 16.297-82.824 81.648-14.672 14.449 3.5859 20.273 20.16 114.3-103.04-53.82-18.312-9.5195-18.199 9.6875-102.48 54.488 18.984-114.35 3.3594-20.328-14.559-14.336-83.609-80.586 114.8-17.246 20.383-3.0781 9.0156-18.535 50.852-104.33m-0.44922-88.59-85.68 175.73-193.31 29.062 140.67 135.8-32.145 192.86 172.59-91.84 173.6 90.16-34.051-192.53 139.33-137.14-193.59-27.215z" />
                  <use x="70" y="644" xlinkHref="#t" />
                  <use x="90.550781" y="644" xlinkHref="#d" />
                  <use x="104.359375" y="644" xlinkHref="#a" />
                  <use x="123.347656" y="644" xlinkHref="#k" />
                  <use x="142.242188" y="644" xlinkHref="#c" />
                  <use x="155.628906" y="644" xlinkHref="#a" />
                  <use x="174.617188" y="644" xlinkHref="#j" />
                  <use x="204.410156" y="644" xlinkHref="#i" />
                  <use x="224.453125" y="644" xlinkHref="#h" />
                  <use x="252.453125" y="644" xlinkHref="#g" />
                  <use x="271.796875" y="644" xlinkHref="#f" />
                  <use x="288.394531" y="644" xlinkHref="#b" />
                  <use x="307.632812" y="644" xlinkHref="#e" />
                  <use x="327.5625" y="644" xlinkHref="#s" />
                  <use x="70" y="672" xlinkHref="#r" />
                  <use x="82.183594" y="672" xlinkHref="#d" />
                  <use x="95.992188" y="672" xlinkHref="#b" />
                  <use x="115.226562" y="672" xlinkHref="#q" />
                  <use x="154.152344" y="672" xlinkHref="#c" />
                  <use x="167.535156" y="672" xlinkHref="#p" />
                  <use x="187.46875" y="672" xlinkHref="#a" />
                  <use x="216.207031" y="672" xlinkHref="#o" />
                  <use x="239.640625" y="672" xlinkHref="#b" />
                  <use x="258.878906" y="672" xlinkHref="#n" />
                  <use x="278.8125" y="672" xlinkHref="#e" />
                  <use x="308.492188" y="672" xlinkHref="#m" />
                  <use x="329.015625" y="672" xlinkHref="#d" />
                  <use x="342.820312" y="672" xlinkHref="#b" />
                  <use x="362.058594" y="672" xlinkHref="#l" />
                  <use x="371.65625" y="672" xlinkHref="#a" />
                  <use x="390.648438" y="672" xlinkHref="#f" />
                  <use x="407.242188" y="672" xlinkHref="#c" />
                </g>
              </svg>
            )}
          </div>

          <div className="w-5 ml-0.5">{String(index + 1)}</div>
        </div>

        <div className="flex items-center space-x-2 ml-2">
          <div>
            <img alt="coin-logo" className="w-5 h-5" src={image} />
          </div>
          <div className="font-bold">{name}</div>
          <div className="uppercase font-bold text-xs text-gray-400">
            {symbol}
          </div>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between w-full">
      <div
        className={`w-12 text-right ${
          price_change_percentage_24h < 0 ? "text-red-500" : "text-green-500"
        }`}
      >
        {price_change_percentage_24h?.toFixed(2)}%
      </div>
      <div>${handleDecimals(current_price)}</div>
    </div>
  </motion.li>
);

export default Coin;
