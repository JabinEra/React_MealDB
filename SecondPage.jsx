import React from "react";
export default function SecondPage({mealItem}) {

    return(
        <div className="col-3 my-3 shawod-lg">
            <div  className="card h-100">
                <img src={mealItem.strMealThumb	} alt="" />   
                <div className="card-body" >
                <button className="btn btn-primary">{mealItem.strMeal}</button>             
            </div>

            </div>
        </div>
    );
};
