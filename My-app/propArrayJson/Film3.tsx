import ListFilm3 from "./props/ListFilm3";
import { IFilm3 } from "./model/IFilm3";

import filmsData from "../data/films.json"

const Film3 = () => {

  const films: IFilm3[] = filmsData;

// addesso l'array viene creato su data
  /*
  const films = [
    {
      id: "e1",
      title: "Film Drammatico",
      description: "Film Drammatico Description",
      type: "Drammatico",
      release: 2023,
    },

    {
      id: "e2",
      title: "Film Horror",
      description: "Film Horror Description",
      type: "Horror",
      release: 2022,
    },
    {
      id: "e3",
      title: "Film Commedia",
      description: "Film Commedia Description",
      type: "Commedia",
      release: 2021,
    },
    {
      id: "e4",
      title: "Film Action",
      description: "Film Action Description",
      type: "Action",
      release: 2020,
      },

  ];
  */

  return (
    <div>
      <ListFilm3 items={films} />
    </div>
  );
};

export default Film3;