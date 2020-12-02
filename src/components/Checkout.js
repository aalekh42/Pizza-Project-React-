import React,{useState} from 'react';
import { useHistory } from "react-router-dom";
import Pizzaman from "../assets/PizzaMan.png";

export default function Checkout({ingredients}){
    const history = useHistory();
    const [success, setSuccess] = useState(false);
return(
    <>
        <div className="row mt-5">
            <div className="col" style={{border:"2px solid black"}}>
                <div className="abc ml-2" style={{ fontFamily: "Comfortaa",fontSize:25}}>
                    <i class="fa fa-hand-o-down" aria-hidden="true"></i> My Ingredients 
                </div>
                
                {Object.keys(ingredients).map((ingredient)=>{
                    return(
                        ingredients[ingredient] && (
                            <div className="ml-5" style={{color:"#A32E00"}}>
                                <p style={{fontSize:25,fontFamily:"Century"}}>
                                <i class="fa fa-caret-right" aria-hidden="true"></i>
                                    {ingredient[0].toUpperCase()}
                                    {ingredient.substr(1)}
                                </p>
                            </div>
                        )
                    );
                })}
                    <button style={{background:"#ED254E",fontFamily:"Century",color:"White"}} 
                        className="proceedToCheckout ml-5"
                        onClick={() => history.push("/")}>Go Back</button>

                    <button style={{ marginLeft: 10 ,background:"#ED254E",fontFamily:"Century",color:"White"}} 
                        onClick={() => setSuccess(true)}
                        className="proceedToCheckout"> Confirm </button>
            </div>
            <div className="col" style={{border:"2px solid blue"}}>
                {success && (
                <div style={{ textAlign: "center" }}>
                    <img src={Pizzaman} alt="pizzaman" height="300px" />
                    <div style={{ fontFamily: "Open Sans Condensed", fontSize: 35 }}>
                         We have received your order, Thank you
                    </div>
                    <div style={{ fontFamily: "Comfortaa" }}>
                         Order #{Math.round(Math.random() * 100000)}
                    </div>
                    <div style={{ fontFamily: "Indie Flower", fontSize: 20 }}>
                        Will be ready in 20-30 min.
                    </div>
                </div>
                )}
            </div>
        </div>
    </>    
)
}