import "./ListaSuspensa.css";

const ListaSuspensa = (props) => {
  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <select
        value={props.valor}
        onChange={(evento) => props.aoAlterar(evento.target.value)}
        required={props.required}
      >
        <option value={""}></option>
        {props.itens.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensa;

/*
    <section>
      <h2>Minha Organização</h2>
    </section>
*/
