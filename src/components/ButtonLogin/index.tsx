import './style.scss'

interface ButtonLoginProps {
  name:string
}

export function ButtonLogin(props:ButtonLoginProps) {
  return <button {...props} >Login</button>
}