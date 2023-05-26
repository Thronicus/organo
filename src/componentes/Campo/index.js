import "./Campo.css";

const Campo = ({
  type = "text",
  label,
  placeholder,
  valor,
  required,
  aoAlterar,
}) => {
  return (
    <div className={`campo campo-${type}`}>
      <label>{label}</label>
      <input
        type={type}
        value={valor}
        onChange={(evento) => {
          aoAlterar(evento.target.value);
        }}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
};

export default Campo;
