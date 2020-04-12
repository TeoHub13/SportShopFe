
import UpdateProduct from './updateProduct';
import Modal from '../../components/modal/Modal'
import {Link,withRouter, Redirect, BrowserRouter as Router, Switch} from 'react-router-dom';

import React, { useState } from 'react';
const updateDesign = (props) =>
{
    // const [callFunk, setFunk] = useState(false);
    // function onClickEventHandler(e){
       
    //     setFunk(true);
    //     console.log("zdr");
    // }
    return(
      
<div className="card"  onClick={props.click}  style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}}>

  <img    model={props.model} prid={props.prid} pol={props.pol} cena={props.cena} proiz={props.proiz} brend={props.brend} popust={props.popust} src={props.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  
  <div className="card-body">
    <h5 className="card-title">{props.model}</h5>
    
    {/* <p className="card-text">brend: {props.brend}</p>
    <p className="card-text">cena: {props.cena} MKD</p>
    <p className="card-text">magacin: {props.magacin}</p>
    <p className="card-text">kolicina: {props.kolicina}</p>
    <a href="#" idm={props.idm} idp={props.idp} idk={props.idk} kol={props.kolicina}  onClick={props.clicked} className="btn btn-primary">Delete from Cart</a> */}
  </div>
</div>
 
    )

}
export default withRouter(updateDesign);