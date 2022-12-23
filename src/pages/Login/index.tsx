import { useState } from "react";
import { login } from "../../api/auth";
import { ButtonLogin } from "../../components/ButtonLogin";
import { InputLogin } from "../../components/InputLogin";
import { useNavigate } from "react-router-dom";
import "./style.scss";

export function Login() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigate = useNavigate();

  const auth = async () => {
    try {
      await login({ email, password });
      navigate("/home", { replace: true });
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  return (
    <div className="app">
      <div className="contentFormLogin">
        <form>
          <p>ROD-FINANCE</p>
          <InputLogin
            type="text"
            name="input-email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <InputLogin
            type="password"
            name="input-password"
            placeholder="Password"
            onChange={(event) => setPassword(event.target.value)}
          />
          <ButtonLogin name="button-login" type="button" onClick={() => auth()}>
            Login
          </ButtonLogin>
        </form>
      </div>
    </div>
  );
}
