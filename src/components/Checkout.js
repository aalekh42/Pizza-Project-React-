import React from 'react';

export default function Checkout({ingredients}){
return(
    <>
        <div className="row">
            <div className="col" style={{border:"2px solid black"}}>
                <div>My Ingredients</div>
                {Object.keys(ingredients).map((ingredients)=>{
                    return(
                            <p>
                                {ingredients[0].toUpperCase()}
                                {ingredients.substr(1)}
                            </p>
                    );
                    })}
            </div>
            <div className="col" style={{border:"2px solid blue"}}>
                <div>SUCCESS</div>
            </div>
        </div>
    </>    
)
}