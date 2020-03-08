import React from 'react';
import {useState} from 'react';
import Rating from '../Rejting/Rating'
const products = (props) =>
{
    const [input, setInput] = useState(''); // '' is the initial state value
    return(
     // <div className="card row ">
<div className="card row" style={{width: '18rem', display:'inline-block'}}>
  <img className="card-img-top" src={props.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title ">{props.model}</h5>
    <p className="card-text ">brend: {props.brend}</p>
    <p className="card-text ">cena: {props.cena}</p><span>Kolicina:<input defaultValue={input} onInput={e => setInput(e.target.value)} type="number" ></input></span>
    <pre></pre>
    <a href="#" id={props.id} kol={input} onClick={props.click} className="btn btn-primary">Add to Cart</a>
    <pre></pre>
    <a href="#" id={props.id} onClick={props.wish} className="btn btn-primary">Add to Wishlist</a>
    {/* <Rating/> */}
     
  </div>
  <form onClick={props.star} >
    <label>Rate:</label>
    <label >1</label>
    <input type="radio"  name="rate" id={props.id} value="1"></input>
    <label >2</label>
    <input type="radio"  name="rate" id={props.id} value="2"></input>
    <label >3</label>
    <input type="radio"  name="rate" id={props.id} value="3"></input>
    <label >4</label>
    <input type="radio"  name="rate" id={props.id} value="4"></input>
    <label >5</label>
    <input type="radio"  name="rate" id={props.id} value="5"></input>
    </form>
</div>
    )

}
export default products;