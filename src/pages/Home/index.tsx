import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { JobsList } from "../../components/JobsList";
import { Search } from "../../components/Search";
import './style.scss';

export const Home = ()=>{
 //
   const navigate =useNavigate()
    const handleSearch = (keywords:string)=>{
        navigate(`/jobs?query=${keywords}`,)
    }
  
    const [list] = useState(['test','test2','test3'])
    return <div>
        <Search  autoCompleteInitialList={list} placeholder="Search keyword" onKeywordChange={handleSearch}/>
        <JobsList/>
    </div>
}


