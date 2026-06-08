import { useContext } from "react";
import { ApContext } from "../context/Context";

const CoinCard = () => {
   const { filterCoins, selectedCoinId } =
       useContext(ApContext);

  return (
    <>
    {filterCoins.map((coin)=>{
        return(        <div className="flex justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-lg border border-gray-100 items-center ">
      <div className="flex items-center gap-3">
        <img
          src={coin.image}
          alt=""
          onClick={() => selectedCoinId(coin.id)}
          className="size-10 rounded-full cursor-pointer hover:scale-110 transition-transform"
        />
      </div>
      <div>
        <h3 className="font-bold text-gray-800 text-sm sm:text-base">
          {coin.name}
        </h3>
        <span className="text-xs text-gray-500 uppercase">{coin.symbol}</span>
      </div>
      <div>
        <p className="font-bold text-gray-800">
          ${coin.current_price.toLocaleString()}
        </p>
      </div>
    </div>)

    })}
    </>
  );
};

export default CoinCard;
