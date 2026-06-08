import { useContext } from "react";
import { ApContext } from "../context/Context";
import { FiSearch } from "react-icons/fi";

const Search = () => {
  const { search, setSearch } = useContext(ApContext);
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6 mx-1">
      <h2 className="text-2xl font-bold text-gray-700">Market Prices</h2>
      <div className="relative w-full sm:w-64">
        <FiSearch className="absolute left-3 top-3" />
        <input
          type="text"
          className="w-full pl-10 pr-4 py-2 rounded-xl bg-white border border-gray-200 text-gray-800 focus:outline-none"
          placeholder="Search Coin(e.g. USDT"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
