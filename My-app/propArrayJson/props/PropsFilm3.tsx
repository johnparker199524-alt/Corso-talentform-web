import { IFilm3 } from "../model/IFilm3";

const PropsFilm3: React.FC<IFilm3> = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h3>{props.type}</h3>
      <h4>{props.release}</h4>
    </div>
  );
};

export default PropsFilm3;