import React, { Component } from 'react';
import StatsDesign from './StatsDesign';
import Aktiven from './Aktiven';
import PatikiDesign from './PatikiDesign';
import PotrosPoMes from './PotrosPoMes';
import AksDesign from './AksDesign';
import OblekaDesign from './OblekaDesign';
import axios from 'axios';

class Stats extends Component
{
    constructor(props)  
    {
        super(props);
        this.state={
          najprodavan: [],
          najaktiven: [],
          patiki:[],   
          potMes:[],
          obleka:[],
          aksesoari:[]
          
        }
    }
    
    async componentDidMount() {
        // Make first two requests
        const [firstResponse, secondResponse,thirdResp,forthResp,fifthResp,sestiResp] = await Promise.all([
          
          axios.get("http://localhost:8080/products/najprodavan"),
          axios.get("http://localhost:8080/user/najaktiven"),
          axios.get("http://localhost:8080/products/patiki"),
          axios.get("http://localhost:8080/naracki/potrosuvacka"),
          axios.get("http://localhost:8080/products/obleka"),
          axios.get("http://localhost:8080/products/aksesoari")
          
      
          ]);
      
        // Update state once with all 3 responses
        this.setState({
          najprodavan: firstResponse.data,
          najaktiven: secondResponse.data,
          patiki:thirdResp.data,
          potMes:forthResp.data,
            obleka:fifthResp.data,
            aksesoari:sestiResp.data
        });
        console.log(this.state.najprodavan);
        console.log(this.state)
      }

    render()
    {
        const prodavan=this.state.najprodavan.map(product => {
            return <StatsDesign key={product.produktId} brend={product.brend} model={product.model} cena={product.cena}  />
            } )  
            const aktiven=this.state.najaktiven.map(user => {
                return <Aktiven ime={user.korisnickoIme}  prezime={user.prezime}  />
                } )  
                const patiki=this.state.patiki.map(patika => {
                    return <PatikiDesign key={patika.produktId} id={patika.produktId}  mesec={patika.mesec} potrosuvacka={patika.potroshuvacka}  />
                    } )  
                    const potMes=this.state.potMes.map(pot => {
                        return <PotrosPoMes key={pot.mesec} mesec={pot.mesec}  suma={pot.suma}  />
                        } )  
                        
                const obleka=this.state.obleka.map(ob => {
                    return <OblekaDesign key={ob.produktId} id={ob.produktId}  mesec={ob.mesec} potrosuvacka={ob.potroshuvacka}  />
                    } )  
                    
                const aksesoari=this.state.aksesoari.map(aks => {
                    return <AksDesign key={aks.produktId} id={aks.produktId}  mesec={aks.mesec} potrosuvacka={aks.potroshuvacka}  />
                    } )  
          return(
          
            <div>
                  {prodavan}        
                 {aktiven}
                 {patiki}
                 {potMes}
                 {obleka}
                 {aksesoari}
                 

             </div>
        );
    }
} 
export default Stats;