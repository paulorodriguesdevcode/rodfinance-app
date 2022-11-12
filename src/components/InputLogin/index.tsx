import './style.scss'

interface InputLoginProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{
}

export function InputLogin(props:InputLoginProps) {
  return <input {...props} />
}