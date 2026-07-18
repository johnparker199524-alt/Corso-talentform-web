import { IHotel } from "../model/IHotel";
const PropsHotel: React.FC<IHotel> = (props) => {
    
  return (
    <div>
      <div>
            <img src={props.picture} style={{width:'45%'}} alt={props.nome} />

        <ul style={{listStyle:'none' , fontFamily:'fantasy'}}>
          <li>nome : {props.nome}</li>
          <li>Tipo : {props.type}</li>
          <li>Tipo Rooms : {props.room_type}</li>
          <li> Stanza Dispo : {props.room_available}</li>
          <li>Prezzo Day : {props.price_room_day}</li>
        </ul>
      </div>
    </div>
  );
};

export default PropsHotel;