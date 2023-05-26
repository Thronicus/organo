import { useState } from "react";
import hexToRgba from "hex-to-rgba";

import Campo from "../Campo";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = ({ times, cadastrarColaborador, cadastrarTime }) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [novoTime, setNovoTime] = useState("");
  const [corNovoTime, setCorNovoTime] = useState("#000000");

  const aoSalvarColaborador = (evento) => {
    evento.preventDefault();

    cadastrarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const aoCriarTime = (evento) => {
    evento.preventDefault();

    cadastrarTime({
      nome: novoTime,
      cor: corNovoTime,
      corSecundaria: hexToRgba(corNovoTime, "0.3"),
    });
    setNovoTime("");
    //setCorNovoTime("#000000")
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvarColaborador}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <Campo
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
          required={true}
        />
        <Campo
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
          required={true}
        />
        <Campo
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          label="Times"
          itens={times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
          required={true}
        />
        <Botao>Criar Card</Botao>
      </form>
      <form onSubmit={aoCriarTime}>
        <h2>Preencha os dados para criar o time.</h2>
        <Campo
          label="Nome"
          placeholder="Digite o nome do time"
          valor={novoTime}
          aoAlterar={(valor) => setNovoTime(valor)}
          required={true}
        />
        <div className="campo-cor">
          <Campo
            className="campo-cor-colorpicker"
            type="color"
            label="Cor"
            placeholder="Selecione a cor do time"
            valor={corNovoTime}
            aoAlterar={(valor) => setCorNovoTime(valor)}
            required={true}
          />
          <Campo
            className="campo-cor-hex"
            placeholder="Selecione a cor do time"
            valor={corNovoTime}
            aoAlterar={(valor) => setCorNovoTime(valor)}
            required={true}
          />
        </div>
        <Botao>Criar Time</Botao>
      </form>
    </section>
  );
};

export default Formulario;
