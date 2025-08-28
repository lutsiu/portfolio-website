
interface Props {
  title: string;
  list: string[];
}

export default function AdditionalInfoCard({title, list}: Props) {

  return (
    <article className="w-full rounded-[2rem] pt-[1rem] pb-[5rem] px-[2rem] bg-neutral-800 hover:bg-neutral-900 duration-300 cursor-pointer">
      <h6 className="text-[3rem] font-semibold">{title}</h6>
      <ul className="flex flex-col gap-[0.5rem]">
        {list.map((l, i) => {
          return (
            <li
              key={i}
              className="text-[1.4rem] text-neutral-200"
            >
              {l}
            </li>
          )
        })}
      </ul>
    </article>
  )
}