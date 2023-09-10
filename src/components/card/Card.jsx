import "./card.css"

const Card = (props) => {

  return (
    <article className={`card ${props.className}`} onClick={props.onClick} >
        {props.children}
    </article>
  )
}

export default Card