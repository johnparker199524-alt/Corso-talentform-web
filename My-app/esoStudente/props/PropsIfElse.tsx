import { IStudentList } from "../model/IStudentList";

const PropsIfElse: React.FC<IStudentList> = ({ studenti }) => {

const getEsito = (voto: number): string => {
  if (voto >= 6) {
    return "Promosso";
  } else { 
    return "Bocciato";
  }
};

  return (
    <ul>
      {studenti?.map((s) => (
        <li key={s.id}>
          {s.nome} - {getEsito(s.voto)}
        </li>
      ))}
    </ul>
  );
};

export default PropsIfElse;