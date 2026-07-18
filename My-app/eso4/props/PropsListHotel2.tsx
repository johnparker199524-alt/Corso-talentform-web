import React from 'react'
import { IHotel2 } from '../model/IHotel2'
import PropsHotel2 from './PropsHotel2'

type items = IHotel2
const PropsListHotel2: React.FC<{array:items[]}> = (props) => {
  

  return (
    <div>
        <>
          <PropsHotel2
          picture = {props.array[0].picture}
          nome = {props.array[0].nome}
          room_type={props.array[0].room_type}
          price_room_day={ props.array[0].price_room_day}
          room_available={ props.array[0].room_available}
          />
          <PropsHotel2
          picture = {props.array[1].picture}
          nome = {props.array[1].nome}
          room_type={props.array[1].room_type}
          price_room_day={ props.array[1].price_room_day}
          room_available={ props.array[1].room_available}
          />
          <PropsHotel2
          picture = {props.array[2].picture}
          nome = {props.array[2].nome}
          room_type={props.array[2].room_type}
          price_room_day={ props.array[2].price_room_day}
          room_available={ props.array[2].room_available}
          />
          <PropsHotel2
          picture = {props.array[3].picture}
          nome = {props.array[3].nome}
          room_type={props.array[3].room_type}
          price_room_day={ props.array[3].price_room_day}
          room_available={ props.array[3].room_available}
          />
           
        </>
    </div>
  )
}

export default PropsListHotel2