
interface Props {
  title: string;
}

export default function AboutPageTitle({title}: Props) {

  return (
    <h4>{title}</h4>
  )
}