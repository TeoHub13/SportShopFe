import React from 'react';
const Aktiven = (props) =>
{
    
    
    return(
      
        <div className="card " style={{width:'18rem',height:'100%',padding: '0px',marginLeft:'1rem',display:'inline-block'}}>
  <div className="card-body">
  
  <p></p>
    <p></p>
    <p></p>
    <p></p>


    <p className="card-text">Najaktiven Korisnik</p> 
    <p className="card-text">Korisnicko Ime: {props.ime}</p>
    <p className="card-text">Prezime: {props.prezime}</p>
    <p></p>
    <p></p>
        
    {/* <p className="card-text">korisnik_id: {props.patiki}</p>
    
     */}
     </div>
</div>
 
    )

}
export default Aktiven;