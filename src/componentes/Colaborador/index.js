import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import "./Colaborador.css";

const Colaborador = ({ time, colaborador, aoDeletar, aoFavoritar }) => {
  const corBotao = {
    "--cor-primaria": "rgba(255, 255, 255, 0.7)",
    "--cor-pressionado": "#ffffff",
  };

  return (
    <div className="colaborador">
      <div className="cabecalho" style={{ backgroundColor: time.cor }}>
        <AiFillCloseCircle
          className="botao-deletar"
          onClick={() => aoDeletar(colaborador.id)}
          style={corBotao}
        />
        <img src={colaborador.imagem} alt={colaborador.nome}></img>
      </div>
      <div className="rodape">
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
        <div className="favoritar">
          {colaborador.favorito ? (
            <AiFillHeart
              onClick={() => aoFavoritar(colaborador.id)}
              style={{ color: "#ff0000" }}
            />
          ) : (
            <AiOutlineHeart onClick={() => aoFavoritar(colaborador.id)} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Colaborador;
