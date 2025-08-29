import Image from "next/image";

interface Props {
  projectTitle: string;
  projectHeroImage: string;
}

export default function TopPart({projectHeroImage, projectTitle}: Props) {

  return (
    <div className="mt-[3rem]">
      <div className="mt-[2rem] text-center md:text-left">
        <h2 className="text-[8rem] font-bold leading-[120%]">{projectTitle}</h2>
        <h5 className="text-purple-300 text-4xl">Case study</h5>
      </div>
      <div className="relative w-full aspect-[16/9] h-[60rem] overflow-hidden rounded-2xl my-[2rem]">
        <Image
          src={`${projectHeroImage}`}
          alt="Case study image"
          fill
          className=""
          sizes="100vw"
          priority
        />
      </div>
    </div>
  )
}