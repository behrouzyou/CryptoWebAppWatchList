import Header from "./components/Header";
import TrendSection from "./components/TrendSection";
import Search from "./components/Search";
import CryptoList from "./components/CryptoList"
import Pagination from "./components/Pagination"
import { useContext, useEffect } from "react";
import { ApContext } from "./context/Context";
import {  } from "../public/unnamed.webp";



const App = () => {
    const{loading,page,search,coins,DataCoinsList}=useContext(ApContext)

    useEffect(() => {
     DataCoinsList()
  }, [page]);

    return (
        <div className='min-h-screen bg-slate-50 bg-[url(../public/unnamed.webp)] bg-cover'>
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

        </div>
    );
}

export default App;
//
