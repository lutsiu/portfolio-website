import SeeMore from "@/app/components/SeeMoreLink/SeeMoreLink";
import Title from "@/app/components/title";
import Link from "next/link";

export default function WhoAmISection() {
  
  return (
    <section className="mt-[15rem] relative">
      <div className="flex gap-[10rem]">
        <div className="flex flex-col gap-[2rem]">
          <Title title="Who Am I"/>
          <p className="text-[2rem]">
            I’m a full-stack developer with hands-on experience delivering commercial projects that solve real business problems.
            My focus is on writing clean, maintainable code and building products that are efficient, scalable, and enjoyable to use.
          </p>
          <SeeMore url="about" title="Read more" />
        </div>
        <div className="">
          <div className="w-[23rem] h-[23rem] bg-neutral-800 rounded-full">

          </div>
        </div>
      </div>
      
    </section>
  )
}