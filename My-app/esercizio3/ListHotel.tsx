import PropsHotel from "./props/PropsHotel";
import { IHotel } from "./model/IHotel";


import './asset/google.webp'


type hotel = IHotel[];
const ListHotel: React.FC<{array: hotel}> = (props) => {

    return (
        <div>
        <PropsHotel
        picture = { props.array[0].picture}
        nome = {props.array[0].nome}
        type = { props.array[0].type}
        room_type = { props.array[0].room_type}
        room_available = { props.array[0].room_available}
        price_room_day = { props.array[0].price_room_day}
            />
  <PropsHotel
        picture = { props.array[1].picture}
        nome = {props.array[1].nome}
        type = { props.array[1].type}
        room_type = { props.array[1].room_type}
        room_available = { props.array[1].room_available}
        price_room_day = { props.array[1].price_room_day}
            />
  <PropsHotel
        picture = { props.array[2].picture}
        nome = {props.array[2].nome}
        type = { props.array[2].type}
        room_type = { props.array[2].room_type}
        room_available = { props.array[2].room_available}
        price_room_day = { props.array[2].price_room_day}
            />
  <PropsHotel
        picture = { props.array[3].picture}
        nome = {props.array[3].nome}
        type = { props.array[3].type}
        room_type = { props.array[3].room_type}
        room_available = { props.array[3].room_available}
        price_room_day = { props.array[3].price_room_day}
            />
  {/* <PropsHotel
        picture = { props.array[4].picture}
        nome = {props.array[4].nome}
        type = { props.array[4].type}
        room_type = { props.array[4].room_type}
        room_available = { props.array[4].room_available}
        price_room_day = { props.array[4].price_room_day}
            /> */}


        </div>
    
)
}

export default ListHotel;