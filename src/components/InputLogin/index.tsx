import './style.scss'

interface InputLoginProps {
  type:string
  name:string
  placeholder:string
}

export function InputLogin(props:InputLoginProps) {
  return <input {...props} />
}