import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import SecondPage from "./SecondPage";
export default function Meal() {
    let [meal , setMeal] = useState([])
    let {id} = useParams()
    useEffect(()=>{
        fetchMeal(id)
    } , [id])

    let fetchMeal =(food)=>{
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${food}`)
        .then((response) =>response.json())
        .then((data) => setMeal(data.meals))
        .catch((error)=>console.log(error))
    }

    return(
        <div className="row row-cols-4">
        {
            meal.map((item , idx)=>
                (<SecondPage key={idx} mealItem={item}/>))

        }
        </div>
    );
};
