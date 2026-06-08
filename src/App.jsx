import Header from "./components/Header";
import TrendSection from "./components/TrendSection";
import Search from "./components/Search";
import CryptoList from "./components/CryptoList"
import PriceChartModal  from "./components/PriceChartModal"
import Pagination from "./components/Pagination"
import CoinCard from "./components/CoinCard";


const App = () => {

    return (
        <div className='min-h-screen bg-slate-50'>
       <Header/>
       <main className="container mx-auto mt-8">

       <TrendSection/>
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
