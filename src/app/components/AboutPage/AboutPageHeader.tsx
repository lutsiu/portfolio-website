import Title from "../../components/title";

interface Props {
  shortDescription: string;
}

export default function AboutPageHeader({shortDescription}: Props) {

  return (
    <header>
      <Title title="About me"/>
      <h6>{shortDescription}</h6>
    </header>
  )
}