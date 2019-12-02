import React from 'react';
import logo from './logo.png'
import instagram from './instagram.png'
import Navbar from "./Navbar";

export default class App extends React.Component {

  render(){


  return (

    <div>
      <div>
      <div className="main-flex-center">
        <Navbar />
        <div className="animated bounceInUp"><img className="logo" src={logo} alt="logo"/></div>
        <div className="animated bounceInRight"><a href="https://instagram.com/curateforchange"><img src={instagram} width='30' alt="instagram"/></a></div>
      </div>
      
      <div className="main-paragraph animated fadeIn">
      
        <div id="aboutus" className="height-100">
          <p>
          Curate for change uses the transformative power of art to promote awareness, encourage dialogue, and <br/>
          inspire action. We seek to address issues of social justice, environmental stewardship and sustainability—in <br/>
          creative, inspiring, and ultimately positive ways by creating on-site installations that are at once emotional, <br/>
          intellectual, and sensory.   
          </p>
        </div> 
      
        <div id="why" className="height-100">
          <div className="title">Why</div>
          <p>
          Art and design are manifestations of the culture from which they emanate from and we therefore seek to use <br/>
          them as a vessel for cultural exchange. We believe that promoting social awareness is a responsibility. We <br/>
          consider the act and practice of staging artistic diversity a vital means by which art and design can serve <br/>
          social progress.  
          </p>
        </div> 
        
        <div id="how" className="height-100">
          <div className="title">How</div>
          <p>
          We conceive and deliver artistic, innovative and participative installations, aiming to raise awareness and <br/>
          mobilize action on social issues. For each project, we partner with a related not-for-profit organization to <br/>
          create an interconnected programme that sheds light on the issue in question. In this way, the installation <br/>
          serves as a beacon around which artists, customers and organizations can unite as a collective force for <br/> change. 
          </p>
        </div> 
        
        <div id="contactus" className="height-100">
          <div className="title">Contact Us</div>
          <p>
            info@curateforchange.com <br/>
            @curateforchange
          </p>
        </div> 
      
      </div>
      
      </div>
    </div>

  );
  }
}
