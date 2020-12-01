import React from 'react';
import Base from '../assets/PizzaBase.png';
import Cheese from '../assets/BaseCheese.png';
import Olive from '../assets/Olive.png';
import Pineapple from '../assets/Pineapple.png';
import Basil from '../assets/Basil.png';
import Tomato from '../assets/Tomato.png';
import Mushroom from '../assets/Mushroom.png';



export default function Customize({ingredients,setIngredients}){

    const onChange = (event, name) => {
        
        let newIngredients = JSON.parse(JSON.stringify(ingredients));
        newIngredients[name] = event;
        setIngredients(newIngredients);
      };
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
                <label class="container-checkbox">
                  Pineapple
                    <input 
                    type="checkbox" 
                    checked={ingredients["pineapple"]} 
                    onChange={(event)=>
                                onChange(event.currentTarget.checked,"pineapple")} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label class="container-checkbox">
                  Basil
                    <input 
                    type="checkbox" 
                    checked={ingredients["basil"]} 
                    onChange={(event)=>
                                onChange(event.currentTarget.checked,"basil")} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label class="container-checkbox">
                  Olive
                    <input 
                    type="checkbox" 
                    checked={ingredients["olive"]} 
                    onChange={(event)=>
                                onChange(event.currentTarget.checked,"olive")} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label class="container-checkbox">
                  Tomato
                    <input 
                    type="checkbox" 
                    checked={ingredients["tomato"]} 
                    onChange={(event)=>
                                onChange(event.currentTarget.checked,"tomato")} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label class="container-checkbox">
                  Mushroom
                    <input 
                    type="checkbox" 
                    checked={ingredients["mushoom"]} 
                    onChange={(event)=>
                                onChange(event.currentTarget.checked,"mushroom")} 
                    />
                    <span className="checkmark"></span>
                </label>
                <label class="container-checkbox">
                  Cheese
                    <input 
                    type="checkbox" 
                    checked={ingredients["cheese"]} 
                    onChange={(event)=>
                                onChange(event.currentTarget.checked,"cheese")} 
                    />
                    <span className="checkmark"></span>
                </label>
            </div>
        </div>
    </>      
)
}