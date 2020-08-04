import React from "react";
import './style.css';
import Logo from '../../assets/cvc_logo.png'

interface Props {
  name: string
}

const Header : React.FC<Props> = ({name}) => {
  return( 
    <header className= 'Header'>
      <div className='content'>
        <img src={Logo} alt="logo"/>
        <div className='icones'>
          <p>icones</p>
          <p>icones</p>
          <p>icones</p>
        </div>
      </div>
    </header>
  )
}
export default Header;