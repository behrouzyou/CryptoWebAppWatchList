import { createContext, useState } from "react";
// https://api.coingecko.com/api/v3/simple/price?vs_currencies=usd&ids=bitcoin&x_cg_demo_api_key=CG-XzV7J63PpLevv2JA1KfZxT3x
// CG-XzV7J63PpLevv2JA1KfZxT3x
import axios from "axios";
export const ApContext = createContext();

const AppContextProvider = ({ children }) => {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedCoinId, setSelectedCoinId] = useState(null);
  const filterCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase()),
  );
  const DataCoinsList = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&names=Bitcoin&symbols=btc&category=layer-1&price_change_percentage=1h&per_page=20&page=${page}`,
        {
          headers: { "x-cg-demo-api-key": "CG-XzV7J63PpLevv2JA1KfZxT3x" },
        },
      );
      setLoading(false);
      setCoins(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ApContext.Provider
      value={{
        DataCoinsList,
        filterCoins,
        loading,
        coins,
        search,
        selectedCoinId,
        page,
        setCoins,
        setLoading,
        setSearch,
        setSelectedCoinId,
        setPage,
      }}
    >
      {children}
    </ApContext.Provider>
  );
};

export default AppContextProvider;
