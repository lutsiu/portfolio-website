
interface Props {
  title: string;
  list: string[];
}

export default function WhatIBringCard({title, list}: Props) {
  
  return (
    <article className="bg-neutral-800 hover:bg-neutral-900 duration-300 cursor-pointer rounded-[2rem] px-[2rem] pt-[1rem] pb-[2rem] md:pb-[4rem] w-full">
      <h6 className="text-[2rem] font-semibold">{title}</h6>
      <ul className="mt-[1rem]">
        {list.map((l, i) => {
          return (
            <li
              key={i}
              className="text-[1.5rem] text-neutral-100 flex items-center gap-[0.6rem] "
            >
              <div className="bg-purple-600 w-[0.7rem] h-[0.7rem] rounded-full"/>
              <p>{l}</p>
            </li>
        )})}
      </ul>
    </article>
  )
}