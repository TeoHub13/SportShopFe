import React from 'react';
const Aktiven = (props) =>
{
    
    
    return(
      
        <div className="card " style={{width: '18rem ',display:'inline-block'}}>
  <div className="card-body">
  
  
    <p className="card-text">Najaktiven Korisnik</p> 
    <p className="card-text">Korisnicko Ime: {props.ime}</p>
    <p className="card-text">Prezime: {props.prezime}</p>
        
    {/* <p className="card-text">korisnik_id: {props.patiki}</p>
    
     */}
     </div>
</div>
 
    )

}
export default Aktiven;