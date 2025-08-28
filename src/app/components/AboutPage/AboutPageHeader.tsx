
interface Props {
  shortDescription: string;
}

export default function AboutPageHeader({shortDescription}: Props) {

  return (
    <header className="mt-[5rem]">
      <h1 className="text-[7rem] font-bold leading-[110%]">About me</h1>
      <h6 className="text-[2rem] leading-[110%] text-neutral-300 font-medium">{shortDescription}</h6>
    </header>
  )
}