import React, { Component } from 'react';
import './Navbar.scss'

export default class Navbar extends Component {

  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  toggleMenu() {
    const currentState = this.state.visible;
    this.setState({ visible: !currentState });
  }

  handleNavigation(x){
    console.log(x.url)
    // this.props.getActivePage(x.url)
  }

  render() {

  const navigation = [
    {id: 0, name: 'About Us', url: 'aboutus'},
    {id: 1, name: 'Why', url: 'why'},
    {id: 2, name: 'How', url: 'how'},
    {id: 3, name: 'Contact Us', url: 'contactus'}
  ]

    return (
      <div className="navbarfixed">
        <div className={this.state.visible ? 'button_container active': 'button_container  animated bounceInLeft'}  onClick={this.toggleMenu}>
        <span className="top"></span>
        <span className="middle"></span>
        <span className="bottom"></span>
      </div>

      <div className={this.state.visible ? 'overlay open' : 'overlay' }>
        <nav className={this.state.visible ? 'overlay-menu active': 'overlay-menu'}  onClick={this.toggleMenu}>
        <ul>  
          {navigation.map((x,i)=>
            <li key={i}>
              <a href={'#'+x.url} page={x.name} onClick={this.handleNavigation.bind(this,x)}>{x.name}</a>
            </li>
          )}
        </ul>
        </nav>
        </div>
      </div>
      );
  }


}
