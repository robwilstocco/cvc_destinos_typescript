import React from "react";
import './style.css';
import {MdFlight, MdHotel, MdPlace } from 'react-icons/md';
import {FaSuitcase, FaGift} from 'react-icons/fa';
import {IoIosBoat} from 'react-icons/io'
import {GiTicket, GiFamilyHouse} from 'react-icons/gi'

interface Props {
  name: string
}

const Menu : React.FC<Props> = ({name}) => {
  return( 
    <div className='Menu'>
      <a href='/'>
        <MdFlight className='icons_menu'></MdFlight>
        <p>PASSAGENS</p>
      </a>
      <a href='/'>
        <MdHotel className='icons_menu'/>
        <p>HOTEIS</p>
      </a>
      <a href='/'>
        <FaSuitcase className='icons_menu'/>
        <p>PACOTES</p>
      </a>
      <a href='/'>
        <GiFamilyHouse className='icons_menu'/>
        <p>RESORTS</p>
      </a>
      <a href='/'>
        <IoIosBoat className='icons_menu'/>
        <p>CRUZEIROS</p>
      </a>
      <a href='/'>
        <GiTicket className='icons_menu'/>
        <p>INGRESSOS</p>
      </a>
      <a href='/'>
        <FaGift className='icons_menu'/>
        <p>VALE-VIAGEM</p>
      </a>
      <a href='/'>
        <MdPlace className='icons_menu'/>
        <p>DESTINOS</p>
      </a>
    </div>
  )
}
export default Menu;