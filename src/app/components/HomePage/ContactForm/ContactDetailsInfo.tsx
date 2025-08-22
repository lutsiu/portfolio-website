
interface Props {
  title: string;
  details: string;
}

export default function ContactDetailsInfo({title, details}: Props) {
  return (
    <div className="flex flex-col gap-[0.3rem]">
      <h6 className="text-[2rem] font-bold">{title}</h6>
      <p className="text-[1.5rem] text-zinc-300">{details}</p>
    </div>
  )
}