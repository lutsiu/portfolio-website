import Link from "next/link";
import navLinks from "../../data/NavigationLinksData";

export default function Header() {

  return (
    <header className="bg-black/70 text-white">
      <nav className="flex items-center justify-between py-[3rem]">
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
      </nav>
    </header>
  )
}