import { FiRefreshCcw } from "react-icons/fi";

const Header = () => {
  return (
    <header className="sticky top-0 bg-white/90 z-30 backdrop-blur-md border-b border-gray-200 ">
      <div className="container flex mx-auto py-4 justify-between items-center">
        <div className="flex gap-2 items-center">
          <div className="size-8 bg-blue-600 flex justify-center items-center text-white font-bold rounded-lg">
            C
          </div>
          <h1 className="text-xl font-black text-gray-800">CryptoView</h1>
        </div>
        <button className="text-gray-500 p-2 hover:bg-gray-100 rounded-full"><FiRefreshCcw/></button>
      </div>
    </header>
  );
};

export default Header;
