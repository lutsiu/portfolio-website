"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Icon } from "@iconify/react/dist/iconify.js";
import navLinks from "../../data/NavigationLinksData";
import MobileMenu from "./MobileMenu";
import { motion, useReducedMotion } from "framer-motion";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close on route change
  useEffect(() => setOpen(false), [pathname]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const reduce = useReducedMotion();

  const initial = reduce
    ? { opacity: 0 }
    : { opacity: 0, y: -40, filter: "blur(6px)" };

  const animate = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.header 
      className="bg-black/70 text-white "
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="mx-auto flex items-center justify-between py-[3rem]">
        <h3>
          <Link href="/" className="text-[2.4rem] duration-300 hover:text-zinc-400">
            Oleksandr Lutsiuk
          </Link>
        </h3>

        {/* Desktop nav */}
        <ul className="hidden md:flex gap-[5rem] text-[1.8rem]">
          {navLinks.map((n) => (
            <li key={n.href}>
              <Link className="duration-300 hover:text-zinc-400" href={n.href}>
                {n.title}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger on md- */}
        <button
          className="md:hidden p-2 -mr-2"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen(true)}
        >
          <Icon icon="mi:menu" width="32" height="32" />
        </button>
      </nav>

      {/* Overlay */}
      <MobileMenu
        open={open}
        onClose={() => setOpen(false)}
        brand="Oleksandr Lutsiuk"
        links={navLinks}
      />
    </motion.header>
  );
}
