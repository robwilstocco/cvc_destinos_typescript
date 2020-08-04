import React from "react";
import './style.css';
import Destiny from './destiny/Destiny';
import Locations from '../../data/locations';


const Body : React.FC = () => {
  return( 
    <div className='Body'>
      <section className='titles'>
        <h2>GUIA DE DESTINOS</h2>
        <hr/>
        <p>
          Tudo que você precisa saber sobre sua viagem! 
          O que fazer, onde ficar, dicas de restaurantes, 
          compras e muito mais. Confira!
        </p>
      </section>
      <section className='destinys'>
        {
          Locations.map(location =>{
            return(
            <Destiny 
              key={location.key}
              location={location.location}
              country={location.country}
              asset={location.asset}
            />
            )})
        }
      </section>
    </div>
  )
}
export default Body;