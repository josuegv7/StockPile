import React, {Component} from "react";
import Header from './header';
import Welcome from './welcome';
import About from './about';


export default class Landing extends Component {
  render(){
    return(
        <div>
          <Header/>
          <Welcome />
          <About />
      </div>
    )
  }
}
