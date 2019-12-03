import React from 'react';
import logo from './logo.png'
import instagram from './instagram.png'
import Navbar from "./Navbar";
import ScrollAnimation from 'react-animate-on-scroll';
import './Navbar.scss';
import './App.scss';

export default class App extends React.Component {

  render(){




  return (
    <div className="App cont">
      <div className="background">
          <Navbar />
          
          <section id="home" className="home">
          
          <ScrollAnimation animateIn='bounceInRight' animateOut='bounceOutLeft'>  
            <div className='logo'>
              <img width='250px' src={logo} alt="curate"/>
            </div>
          </ScrollAnimation>    
          


          
                      <div className='arrow-down' >
              <a href='#aboutus'>
                <i className='animated pulse infinite fas fa-angle-double-down'style={{fontSize:'48px'}}></i>
              </a>
            </div>
          </section>
          

          <section id="aboutus" className="aboutus padding-top-300">
            <h2 className="title">about us</h2><br/>
            <ScrollAnimation animateIn='fadeIn'>
            <p>
          Curate for change uses the transformative power of art to<br/> promote awareness, encourage dialogue, and <br/>
          inspire action. We seek to address issues of social justice,<br/> environmental stewardship and sustainability—in <br/>
          creative, inspiring, and ultimately positive ways by creating<br/> on-site installations that are at once emotional, <br/>
          intellectual, and sensory.  
            </p>
            </ScrollAnimation>

          </section>


          <section id="why" className="why padding-top-300">

            <h2 className="title">why</h2><br/>
            <ScrollAnimation animateIn='fadeIn'>
            <p>
          Art and design are manifestations of the culture from which<br/> they emanate from and we therefore seek to use <br/>
          them as a vessel for cultural exchange. We believe that <br/>promoting social awareness is a responsibility. We <br/>
          consider the act and practice of staging artistic diversity a<br/> vital means by which art and design can serve <br/>
          social progress.  
              </p>
            </ScrollAnimation><br/><br/>
  

          </section>

          <section id="how" className="how padding-top-300">

            <h2 className="title ">how</h2><br/>
            <ScrollAnimation animateIn='fadeIn'>
            <p>
          We conceive and deliver artistic, innovative and participative <br/>installations, aiming to raise awareness and <br/>
          mobilize action on social issues. For each project, we partner<br/> with a related not-for-profit organization to <br/>
          create an interconnected programme that sheds light on the <br/>issue in question. In this way, the installation <br/>
          serves as a beacon around which artists, customers and<br/> organizations can unite as a collective force for <br/> change. 
              </p>
            </ScrollAnimation><br/><br/>
  

          </section>

          <section id="contactus" className="contactus">
          <div className="padding-top-300" style={{marginBottom: '300px'}}>
            <h2 className="title">contact us</h2><br/>

              <p>info@curateforchange.com</p>
              <p>@curateforchange</p>

              </div>
          </section>

      </div>
    </div>
  );


  }
}
