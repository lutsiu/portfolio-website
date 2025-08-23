interface Props {
  title: string
}
export default function Title({title}: Props) {

  return (
    <h3 className="text-[4rem] font-bold">{title}</h3>
  )
}