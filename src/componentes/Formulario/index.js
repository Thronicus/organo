import { useState } from "react";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [count, setCount] = useState(0);

  const aoSalvar = (evento) => {
    evento.preventDefault();
    props.cadastrarColaborador({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome("Alex" + count);
    setCargo("CEO");
    setImagem("https://github.com/Tabibito-san.png");
    setTime("Programação");
    setCount(count + 1);
  };

  return (
    <section className="formulário">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          required={true}
          label="Nome"
          placeholder="Digite o seu nome"
          valor={nome}
          aoAlterar={(valor) => setNome(valor)}
        />
        <CampoTexto
          required={true}
          label="Cargo"
          placeholder="Digite seu cargo"
          valor={cargo}
          aoAlterar={(valor) => setCargo(valor)}
        />
        <CampoTexto
          label="Imagem"
          placeholder="Informe o endereço da imagem"
          valor={imagem}
          aoAlterar={(valor) => setImagem(valor)}
        />
        <ListaSuspensa
          required={true}
          label="Times"
          itens={props.times}
          valor={time}
          aoAlterar={(valor) => setTime(valor)}
        />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
