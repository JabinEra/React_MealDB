import React, { useState } from "react";
import FirstPage from "./FirstPage";
export default function Category(params) {
    let [category , setCategory] = useState([])
    let [show , setShow] = useState(null)
    let fetchData=()=>{
        setShow("Loading...")
        fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
        .then((response)=>response.json())
        .then((data)=>setCategory(data.categories))
        .catch((error)=>console.log(error))
        .finally(()=>setShow(null))
    }
    let clearData =()=>{
        setCategory([])
    }
    return(
        <>
            <button className='btn btn-primary' onClick={fetchData}> View Meals</button>
            <button className="btn btn-danger" onClick={clearData}>Hide Meals</button>
            <div>{show}</div>
            {
                category.map((cate , idx)=>(<FirstPage key={idx} meal={cate}/>))
            }
        </>
    );
};
