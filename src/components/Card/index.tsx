import './style.scss'

interface CardProps{
  title: string,
  value: string
}

export function Card({title, value}:CardProps) {
  return (
    <div className="card">
      <div className="card-title">
        <span>
          {title}
        </span>
      </div>
      <div className="card-body">
        <span>
          {value}
        </span>
      </div>
    </div>
  );
}