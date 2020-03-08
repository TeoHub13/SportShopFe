import React, {Component} from 'react';
import Logo from '../assets/sportSlika.PNG'
class Home extends Component {

    render(){
        return(
            <div className="text-center" style={{top:"100px"}} >
                <br/>
                <br/>
                <h1>Welcome to our Sport shop App</h1>
                <img  src={Logo} alt=""/>
                <br/>
                <br/>
            </div>
        )
    }
}

export default Home;