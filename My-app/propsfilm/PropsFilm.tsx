const PropsFilm: React.FC<{
  title: string;
  release: number;
  type: string;
  product: string;
}> = (props) => {
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

export default PropsFilm;