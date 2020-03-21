import React from 'react';
import {useState} from 'react';
import Rating from '../Rejting/Rating.css'
const products = (props) =>
{
    const [input, setInput] = useState(''); // '' is the initial state value
    return(
     // <div className="card row ">
<div className="card row" style={{width: '18rem', display:'inline-block'}}>
  <img className="card-img-top" src={props.slika} style={{width:280,height:300}} alt="Card image cap"></img>
  <div className="card-body">
    <h4 className="card-title ">{props.model}</h4>
    <p className="card-text ">brend: {props.brend}</p>
    <p className="card-text ">cena: {props.cena} MKD</p><span>Kolicina:<input defaultValue={input} onInput={e => setInput(e.target.value)} type="number" ></input></span>
    <pre></pre>
    <a href="#" id={props.id} kol={input} onClick={props.click} className="btn btn-primary">Add to Cart</a>
    <pre></pre>
    <a href="#" id={props.id} onClick={props.wish} className="btn btn-primary">Add to Wishlist</a>
    {/* <Rating/> */}
     
  </div>
  <form className="rating" onClick={props.star}   >
    <legend>Please rate:</legend>
    <input type="radio" id="star5"  name="rating"   value="5"/><label htmlFor="star5" id={props.id} value="5"  title="Rocks!">5 stars</label>
    <input type="radio" id="star4" name="rating"    value="4" /><label htmlFor="star4" id={props.id} value="4" title="Pretty good">4 stars</label>
    <input type="radio" id="star3" name="rating"    value="3" /><label htmlFor="star3" id={props.id} value="3" title="Meh">3 stars</label>
    <input type="radio" id="star2" name="rating"  value="2" /><label htmlFor="star2" id={props.id} value="2" title="Kinda bad">2 stars</label>
    <input type="radio" id="star1" name="rating"  value="1" /><label htmlFor="star1" id={props.id}  value="1" title="Sucks big time">1 star</label>
    </form>
</div>
    )

}
export default products;