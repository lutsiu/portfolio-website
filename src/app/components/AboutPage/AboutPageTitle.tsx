
interface Props {
  title: string;
}

export default function AboutPageTitle({title}: Props) {

  return (
    <h4 className="text-[3rem] font-bold">{title}</h4>
  )
}