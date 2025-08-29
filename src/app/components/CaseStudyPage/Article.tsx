
interface Props {
  title: string;
  explanation: string
}

export default function Article({title, explanation} : Props) {
  return (
    <article className="mt-[3rem] text-center md:text-left">
      <h4 className="font-bold text-[2.5rem]">{title}</h4>
      <p className="md:w-[66rem] text-neutral-300 text-[1.8rem] mt-[1rem]">{explanation}</p>
    </article>
  )
}