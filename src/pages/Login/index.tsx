import { AxiosError } from 'axios'
import { useState } from 'react'
import { login } from '../../api/auth'
import { ButtonLogin } from '../../components/ButtonLogin'
import { InputLogin } from '../../components/InputLogin'
import './style.scss'


export function Login() {
const [email, setEmail] = useState<string>()
const [password, setPassword] = useState<string>()

const auth = async () => {
  try{
    await login({email,password});
    alert('sucesso')
  }catch(err: any){
    alert(err.response.data.message)
  }  
}

return  <div className="allContent">
            <div className="contentFormLogin">
              <form>
                <p className="1">ROD-FINANCE</p>
                <InputLogin type="text" name='input-email' placeholder='E-mail' onChange={(event) => setEmail(event.target.value)}/>
                <InputLogin type="password" name='input-password' placeholder='Password' onChange={(event) => setPassword(event.target.value)}/>
                <ButtonLogin name='button-login' type="button" onClick={() => auth()}>Login</ButtonLogin>
              </form>
            </div>
          </div>
}