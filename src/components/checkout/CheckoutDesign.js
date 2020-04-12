import React from 'react';
const CheckoutDesign = (props) =>
{
    return(<div className="card " style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}}>
  <div className="card-body">
    <p className="card-text">kosnica: {props.kosnica}</p>
    <p className="card-text">cena: {props.suma}</p>
    <p className="card-text">datum: <pre></pre> {props.datum}</p>
    <p className="card-text">ime: {props.ime}</p>
    <p className="card-text">Prezime: {props.prezime}</p>
    <p className="card-text">korisnik_id: {props.korId}</p>
    </div>
     </div>
 
    )

}
export default CheckoutDesign;