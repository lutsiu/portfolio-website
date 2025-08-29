import Link from "next/link";
import navLinks from "../../data/NavigationLinksData";
import footerSocials from "@/app/data/FooterSocialsData";
import { Icon } from "@iconify/react/dist/iconify.js";


export default function FooterNavigation() {

  return (
    <nav className="flex flex-col lg:flex-row gap-[3rem] lg:gap-0 items-center justify-between ">
      <h3>
        <Link 
          href={"/"}
          className="text-[2.4rem] duration-300 hover:text-zinc-400" 
        >
          Oleksandr Lutsiuk
        </Link>
      </h3>
      <ul className="flex gap-[5rem] text-[1.8rem]">
        {navLinks.map((n, i) => {
          return (
            <li
              key={i}

            >
              <Link 
                className="duration-300 hover:text-zinc-400"
                href={n.href}
              >
                  {n.title}
              </Link>
            </li>
          )
        })}
      </ul>
      <ul className="flex gap-[2rem]">
        {footerSocials.map((s, i) => {
          return (
            <Link
              href={s.href}
              key={i}
              className="
                flex items-center justify-center rounded-[1.5rem] bg-purple-600
                py-[1rem] px-[1rem] duration-300 hover:bg-indigo-600
              "
            >
              <Icon
                icon={s.icon}
                className="w-[2.6rem] h-[2.6rem] "
              />
            </Link>
          )
        })}
      </ul>
    </nav>
  )
}