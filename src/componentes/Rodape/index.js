import "./Rodape.css";

const Rodape = () => {
  return (
    <footer className="footer">
      <section>
        <li>
          <ul>
            <a href="facebook.com" target="_blank">
              <img src="/imagens/fb.png" alt="Facebook" />
            </a>
          </ul>
          <ul>
            <a href="twitter.com" target="_blank">
              <img src="/imagens/tw.png" alt="Twitter" />
            </a>
          </ul>
          <ul>
            <a href="instagram.com" target="_blank">
              <img src="/imagens/ig.png" alt="Instagram" />
            </a>
          </ul>
        </li>
      </section>

      <section>
        <img src="/imagens/logo.png" alt="Logo Organo" />
      </section>

      <section>
        <p>
          Desenvolvido por <a href="https://alura.com.br">Alura</a>
        </p>
      </section>
    </footer>
  );
};

export default Rodape;
