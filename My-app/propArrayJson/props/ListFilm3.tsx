import { IFilm3 } from "../model/IFilm3";
import PropsFilm3 from "./PropsFilm3";

type Items = IFilm3[];

const ListFilm3: React.FC<{ items: Items }> = (props) => {
  return (
    <div>
      {props.items.map((film) => (
        <PropsFilm3
          key={film.id}
          title={film.title}
          description={film.description}
          type={film.type}
          release={film.release}
        />
      ))}
    </div>
  );
};

export default ListFilm3;