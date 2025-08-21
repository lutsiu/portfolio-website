import Link from "next/link";

interface Props {
  url: string;
  title: string;
}

export default function SeeMore({url, title}: Props) {
  return (
    <Link 
      href={`/${url}`} 
      className="text-[1.8rem] text-indigo-500 duration-300 hover:text-purple-500 hover:text-[2.3rem] ">
        {title}
    </Link>
  )
}