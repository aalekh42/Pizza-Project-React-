import React from 'react';
import {Nav,Navbar, NavbarBrand} from 'reactstrap';
import Pizzalogo from '../assets/pizza logo.png';


export default function Header(){
return( 
    <Nav style={{padding:'10px 50px',background:'#ED254E'}}>
        <NavbarBrand href="/"><img src={Pizzalogo} alt="Pizza Base" height="30" width="41"/></NavbarBrand>
        <div style={{color:'white',fontFamily:"Century",fontSize:24}}>PIZZA CUSTOMIZATION </div>
    </Nav>    
)
}