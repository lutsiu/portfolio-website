
interface Props {
  title: string;
  list: string[];
}

export default function WhatIBringCard({title, list}: Props) {
  
  return (
    <article>
      <h6>{title}</h6>
      <ul>
        {list.map((l, i) => {
          return (
            <li
              key={i}
            >
              {l}
            </li>
        )})}
      </ul>
    </article>
  )
}