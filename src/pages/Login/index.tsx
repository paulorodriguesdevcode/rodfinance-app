import { ButtonLogin } from '../../components/ButtonLogin'
import { InputLogin } from '../../components/InputLogin'
import './style.scss'


export function Login() {
  return  <div className="allContent">
            <div className="contentFormLogin">
              <form>
                <p className="1">ROD-FINANCE</p>
                <InputLogin type="text" name='input-email' placeholder='E-mail'/>
                <InputLogin type="password" name='input-password' placeholder='Password'/>
                <ButtonLogin name='button-login'/>
              </form>
            </div>
          </div>
}