import Header from "/src/components/Header";
import TrendSection from "/src/components/TrendSection";
import Search from "/src/components/Search";
import CryptoList from "/src/components/CryptoList"
import PriceChartModal  from "/src/components/PriceChartModal"
import Pagination from "/src/components/Pagination"
import CoinCard from "/src/components/CoinCard";
import { useContext, useEffect } from "react";
import { ApContext } from "./context/Context";



const App = () => {
    const{loading,page,search,coins,DataCoinsList}=useContext(ApContext)
    
    useEffect(() => {
     DataCoinsList()
  }, []);

    return (
        <div className='min-h-screen bg-slate-50'>
       <Header/>
       <main className="container mx-auto mt-8">
{!loading && page===1 && !search && coins.length>0 &&
       <TrendSection/>
}
       <Search/>
       <CryptoList/>
       <Pagination/>
       </main>
       <footer className="mt-12 text-center text-gray-500 text-sm border-t border-gray-200">
        <p>Programmer BehrouzYou@gmail.com❤❤</p>
       </footer>
       <CoinCard/>
       <PriceChartModal/>
        </div>
    );
}

export default App;
