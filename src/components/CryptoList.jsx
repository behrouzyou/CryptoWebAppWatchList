import { useContext } from "react";
import { ApContext } from "../context/Context";
import { HashLoader } from "react-spinners";
import CoinCard from "./CoinCard";

const CryptoList = () => {
  const { loading, filterCoins, search} =
    useContext(ApContext);


  return (
    <>
      {loading && (
        <div className="flex flex-col items-center justify-center h-64 mt-1o">
          <HashLoader size={60} color="#3b82f6" />
        </div>
      )}
      {filterCoins.length === 0 && (
        <div className="col-span-full text-center text-gray-500 py-10">
          No Coins Matching "{search}""
        </div>
      )}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      
       <CoinCard/>
      </div>
    </>
  );
};

export default CryptoList;
