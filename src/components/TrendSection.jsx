import { useContext, useEffect } from "react";
import { ApContext } from "../context/Context";

const TrendSection = () => {
  const { DataCoinsList, loading, coins } = useContext(ApContext);
  ;

  const topCoins=coins.slice(0,3)

console.log(coins);
  

  return (
    <div className="grid gap-1 grid-cols-1 md:grid-cols-3 mb-8 mx-1">
      {topCoins.map((coin) => {
        return(
            <div
          key={coin.id}
          className="bg-linear-to-br p-2 from-blue-600 to-indigo-700 rounded-2xl text-white shadow-lg"
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-blue-200 text-sm mb-1">Trending</p>
              <h3 className="text-2xl font-bold">{coin.name}</h3>
            </div>
            <img
              src={coin.image}
              alt=""
              className="size-12 rounded-full bg-white/20 p-1"
            />
          </div>
          <div className="mt-4 flex justify-between items-center">
            <span className="text-2xl font-bold">
              ${coin.current_price.toLocaleString()}
            </span>
            <span
              className={`px-2 py-1 rounded-lg text-xs font-bold ${coin.price_change_percentage_24h >= 0 ? "bg-green-600/70 text-green-100" : "bg-red-600/30 text-red-500"}`}
            > {coin.price_change_percentage_24h.toFixed(2)}%</span>
          </div>
        </div>
        )
      })}
    </div>
  );
};

export default TrendSection;
