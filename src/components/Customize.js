import React from 'react';
import Base from '../assets/PizzaBase.png';
import Cheese from '../assets/BaseCheese.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';
import Mushroom from '../assets/Mushroom.png';



export default function Customize({ingredients,setIngredients}){

    const changeIngredient=(name)=> {
        let newIngredients = JSON.parse(JSON.stringify(ingredients));//Creating copy for mutating further since it is immutable.
        //toggle that ingredient
        newIngredients[name] =!newIngredients[name]
        setIngredients(newIngredients);
    }
return(
    <>
        {JSON.stringify(ingredients)}
        <div className="row">
            <div className="col" style={{border:"2px solid black"}}>
                <div style={{maxHeight:500,maxWidth:500,position:"relative"}}>
                    <img src={Cheese} height="100%" width="100%" alt="Pizza" className="ingredients"/>
                    <img src={Olive} height="100%" width="100%" alt="Pizza" className="ingredients"/>
                    <img src={Pineapple} height="100%" width="100%" alt="Pizza" className="ingredients"/>
                    <img src={Mushroom} height="100%" width="100%" alt="Pizza" className="ingredients"/>
                    <img src={Basil} height="100%" width="100%" alt="Pizza" className="ingredients" />
                    <img src={Tomato} height="100%" width="100%" alt="Pizza" className="ingredients"/>
                    <img src={Base} height="100%" width="100%" alt="Pizza" />
                </div>
            </div>
            <div className="col" style={{border:"2px solid blue"}}>
                <input type="checkbox" id="pineapple" name="pineapple" onChange={()=>changeIngredient('pineapple')}/>
                <label for="pineapple">Pineapple</label>
            </div>
        </div>
    </>      
)
}