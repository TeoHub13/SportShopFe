import React from 'react';
const PotrosPoMesec = (props) =>
{
    
    
    return(
      
        <div className="card " style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}}>
  <div className="card-body">
  
  <p></p>
    <p></p>
    <p></p>
    <p></p>

    <p className="card-text">Potrosuvacka po mesec </p> 
    <p className="card-text">mesec: {props.mesec}</p>
    <p className="card-text">suma: {props.suma}</p>
    <p></p>
    <p></p>

    {/* <p className="card-text">korisnik_id: {props.patiki}</p>
    
     */}
     </div>
</div>
 
    )

}
export default PotrosPoMesec;