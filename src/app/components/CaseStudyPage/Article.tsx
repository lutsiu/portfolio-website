
interface Props {
  title: string;
  explanation: string
}

export default function Article({title, explanation} : Props) {
  return (
    <article>
      <h4>{title}</h4>
      <p>{explanation}</p>
    </article>
  )
}