import hexToRgba from "hex-to-rgba";

import Colaborador from "../Colaborador";
import "./Time.css";

const Time = ({ time, colaboradores, aoDeletar, aoFavoritar, mudarCor }) => {
  const inlineStyles = {
    "--border-color": time.cor,
  };

  return (
    //Alternativamente pode usar: colaboradores.length > 0 ? () : ()
    colaboradores.length > 0 && (
      <section className="time" style={{ backgroundColor: time.corSecundaria }}>
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.id)}
          className="input-color"
          value={time.cor}
          type="color"
        />
        <h3 style={inlineStyles}>{time.nome}</h3>
        <div className="cards">
          {colaboradores.map((colaborador) => (
            <Colaborador
              key={colaborador.nome}
              time={time}
              colaborador={colaborador}
              aoDeletar={aoDeletar}
              aoFavoritar={aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
