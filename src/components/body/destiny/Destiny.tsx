import React from "react";
import './style.css';

interface Props {
  location :string
  country :string
  asset :string
}

const Destiny : React.FC<Props> = (props) => {
  let background = require(`../../../assets/destiny/${props.asset}`);
  console.log(background);
  return( 
    <div 
      className='Destiny' 
      style={{
        backgroundImage: `url(${background})`}}>
      <h2>{props.location}</h2>
      <div><hr/><h3>{props.country}</h3><hr/></div>
    </div>
  )
}
export default Destiny;