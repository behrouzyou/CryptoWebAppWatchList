import { useContext } from "react";
import { ApContext } from "../context/Context";

const Pagination = () => {
    const{coins,page,setPage,loading}=useContext(ApContext)
    return (
        <div className="flex justify-center items-center gap-4 mt-10">
        <button className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow disabled:opacity-50"
        onClick={()=>setPage(p=>p -1)}
            disabled={page===1|| loading}
        >Previous</button>
        <span className="font-bold text-gray-600">Page {page}</span>
        <button className="px-4 py-2 bg-white text-gray-700 rounded-lg shadow disabled:opacity-50"
        onClick={()=>setPage(p=>p +1)}
            disabled={coins.length<20|| loading}
        >Next</button>

        </div>
    );
}

export default Pagination;
