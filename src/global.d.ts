interface Language {
  id: number;
  value: string;
  label: string;
}

interface Coin {
  id: number;
  name: string;
  image: string;
  fav: boolean;
  current_price: number;
  price_change_percentage_24h: number;
  symbol: string;
}

interface WalletAddress {
  id: string;
  title: string;
  value: string;
}
