import React from "react";
import { Link } from "react-router-dom";
export default function FirstPage({meal}) {
    return(
        <>
        <div className="row my-3 bg-light shadow-sm">
            <div className="col-3 py-3">
                <img src={meal.strCategoryThumb} alt="" />
          </div>
            <div className="col-9">
                <h3><Link to ={"/"+ meal.strCategory}>{meal.strCategory}</Link></h3>
                <p>{meal.strCategoryDescription}</p>
             </div>
        </div>
        </>
    );
};
