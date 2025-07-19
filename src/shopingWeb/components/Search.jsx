import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { items } from '../pages/Data';
import ManProduct from '../pages/ManProduct';
function Search (){
    // console.log(useParams())
    const {term}= useParams();
    const [filterData, setData] =useState([]);

    useEffect(()=>{
        const filterData=()=>{
           
            const data = items.filter((p)=>p.category.toLowerCase().includes
            (term.toLowerCase())||p.color.toLowerCase().includes
            (term.toLowerCase())||p.type.toLowerCase().includes
            (term.toLowerCase()));
            console.log(data);
            setData(data);
            if(data.length==0){
                setData([{price:"Available Soon"}])
            }
        }
        filterData()
    },[term])

    return(
        <>
        <ManProduct items={filterData}/>
        </>
    )
}
export default Search