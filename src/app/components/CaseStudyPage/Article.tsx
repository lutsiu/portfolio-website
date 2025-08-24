
interface Props {
  title: string;
  explanation: string
}

export default function Article({title, explanation} : Props) {
  return (
    <article className="mt-[3rem]">
      <h4 className="font-bold text-[2.5rem]">{title}</h4>
      <p className="w-[66rem] text-neutral-300 text-[1.8rem]">{explanation}</p>
    </article>
  )
}