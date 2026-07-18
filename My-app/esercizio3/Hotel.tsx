import ListHotel from "./ListHotel";
import  img from '../../src/assets/hotel1.webp'
import  img2 from '../../src/assets/hotel2.webp'
import  img3 from '../../src/assets/hotel3.webp'
import  img4 from '../../src/assets/hotel5.webp'
import '../Dinamic/Style.css'
    const Hotel = () => {
    const hotel = [
        {
    picture: img2,
    nome: "HotelPiscina",
    type: "cinque stelle",
    room_type:"Singola",
    room_available:3,
    price_room_day:35
},
          {
    picture: img,
    nome: "Hotel di Napoli",
    type: " zero stelle", //2 -3 stelle
    room_type: "Presidenziale",
    room_available:5 ,
    price_room_day:125
},
          {
    picture: img3,
    nome: "Sutton Palace",
    type: "due stelle", //2 -3 stelle
    room_type: "Doppia",
    room_available:4,
    price_room_day:65
},
        {
    picture: img4,
    nome: "Hotel sul lago",
    type: "una stella", 
    room_type: "Matrimoniale",
    room_available:8 ,
    price_room_day:80 
}
    ];

    return (
        <div style={{textAlign: "center"}}>
            <header>
                <h1>Hotel</h1>
            </header>
            <div>
                <ListHotel array={hotel}/>
            </div>
        </div>
    )
}
export default Hotel