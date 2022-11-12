import "./style.scss";

interface ButtonLoginProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: string;
}

export function ButtonLogin(props: ButtonLoginProps) {
  return <button {...props}>{props.children}</button>;
}
