import Image from "next/image";

interface Props {
  screenshots: string[];
}

export default function ProjectScreenshots({screenshots}: Props) {

  return (
    <div className="mt-[4rem]">
      <h4 className="text-[4.5rem] font-bold">Screenshots</h4>
      <div className="grid grid-cols-3 gap-[2rem] mt-[2rem]">
        {screenshots.map((img, i) => {
          return (
            <div 
              className="relative w-full aspect-video h-[20rem] overflow-hidden rounded-[2rem]"
              key={i}
            >
              <Image
                src={img}
                alt={`Screenshot ${i}`}
                fill
                className="object-cover"
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}