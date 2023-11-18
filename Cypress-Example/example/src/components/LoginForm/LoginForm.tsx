import { useState } from "react";
import styles from "./LoginForm.module.css";

const LoginForm = () => {
  const [logado, setLogado] = useState(false);
  const fazerLogin = (e: any) => {
    e.preventDefault();
    setLogado(!logado);
  };
  return (
    <div className={styles.formsection}>
      <form>
        <div>
          <label htmlFor="email">E-mail:</label>
          <input type="email" id="email"></input>
        </div>
        <div>
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha"></input>
        </div>
        <button onClick={fazerLogin}>Enviar</button>
      </form>
      {logado && <h2>Você fez login!</h2>}
    </div>
  );
};
export default LoginForm;
