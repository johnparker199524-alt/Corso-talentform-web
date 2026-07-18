import { IFilm } from "../model/IFilm";
const PropFilms2: React.FC<IFilm> = (props) => {
  return (
    <div>
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center' , fontFamily:'fantasy', marginTop:50}}>
      <header>
        <h1>FILM</h1>
      </header>
        <ul>
          <li>{props.title}</li>
          <li>{props.type}</li>
          <li>{props.release}</li>
          <li>{props.product}</li>
        </ul>
      </div>
    </div>
  );
};

export default PropFilms2;