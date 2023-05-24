import Colaborador from "../Colaborador";
import "./Time.css";

const Time = (props) => {
  const inlineStyles = {
    "--border-color": props.corSecundaria,
  };

  return (
    props.colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: props.corPrimaria }}>
        <h3 style={inlineStyles}>{props.time}</h3>
        <div className="cards">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              corDeFundo={props.corSecundaria}
              imagem={colaborador.imagem}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
            />
          ))}
        </div>
      </section>
    )
    /*
    props.colaboradores.lenght > 0 ? (
      <section className="time" style={{ backgroundColor: props.corPrimaria }}>
        <h3 style={{ borderColor: props.corSecundaria }}>{props.time}</h3>
        <div className="cards">
          {props.colaboradores.map((colaborador) => (
            <Colaborador
              imagem={colaborador.imagem}
              nome={colaborador.nome}
              cargo={colaborador.cargo}
            />
          ))}
        </div>
      </section>
    ) : (
      ""
    );
    */
  );
};

export default Time;