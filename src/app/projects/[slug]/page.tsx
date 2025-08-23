import Article from "@/app/components/CaseStudyPage/Article";
import Title from "@/app/components/title";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyPage() {

  const lorem =
    `
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit praesentium, 
        libero fuga laudantium deserunt natus molestias
         aliquid cupiditate laborum? Cupiditate saepe placeat quis 
        officiis asperiores. Aperiam aliquam vero illum itaque.
    `;

  const DUMMY_ARRAY = [
    "Mobile first", "Node.js",
    "Typescript", "React",
    "Spring Boot", "Express.js"
  ];
  
  const DUMMY_IMAGES = Array(9).fill("/cat.png");

  return (
    <>
      <div className="pt-[4rem]">
        <Title title="Project Title"/>
        <h5>Case study</h5>
      </div>
      <div className="relative w-full aspect-[16/9] h-[60rem] overflow-hidden rounded-2xl">
        <Image
          src="/cat.png"
          alt="Case study image"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      <div>
        <h1 className="font-bold text-[8rem]">Project title</h1>
        <h4>Project subtitle blaoeirjgioergijergiejgiejrijgierjgjergeorijgeorijgeirjgegjeoirjgeriogjeroijgrj</h4>
        <ul>
          <li>
            <Link href="*">Live</Link>
          </li>
          <li>
            <Link href="*">Repository</Link>
          </li>
          <li>
            <Link href="*">Design</Link>
          </li>
        </ul>
        <ul>
          {DUMMY_ARRAY.map((d, i) => {
            return (
              <li
                key={i}
              >
                {d}
              </li>
            )
          })}
        </ul>
      </div>

      <div>
        <Article title="Context" explanation={lorem} />
        <Article title="Solution" explanation={lorem} />
        <Article title="Impact" explanation={lorem} />
        <Article title="My Role" explanation={lorem} />
      </div>

      <div>
        <h4>Screenshots</h4>
        <div className="grid grid-cols-3">
          {DUMMY_IMAGES.map((img, i) => {
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

      <div>
        <h4>Want something similar?</h4>
        <p>Let's talk about your idea or role.</p>
        <button>Get in touch</button>
      </div>
    </>
  )
}