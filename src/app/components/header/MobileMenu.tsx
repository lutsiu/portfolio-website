"use client";

import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type NavLink = { title: string; href: string };

export default function MobileMenu({
  open,
  onClose,
  brand,
  links,
}: {
  open: boolean;
  onClose: () => void;
  brand: string;
  links: NavLink[];
}) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!open || !mounted) return null;

  const overlay = (
    <div
      className="fixed inset-0 z-50 bg-neutral-900/90 backdrop-blur-sm
                 py-[3rem] px-[3rem] sm:px-[6rem] md:px-[7rem]"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      {/* subtle glow */}
      <div className="pointer-events-none absolute top-8 right-[12%] w-[36rem] h-[28rem]
                      bg-gradient-to-br from-purple-600 to-indigo-700 rounded-full blur-3xl opacity-30" />

      <div
        className="relative mx-auto flex h-full max-w-5xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar */}
        <div className="flex w-full items-center justify-between">
          <Link href="/" className="text-[2.4rem] " onClick={onClose}>
            {brand}
          </Link>
          <button aria-label="Close menu" onClick={onClose} className="p-2">
            <Icon icon="material-symbols-light:close-rounded" width="32" height="32" />
          </button>
        </div>

        {/* Centered links */}
        <ul className="mt-[5rem] mx-auto flex w-full max-w-md flex-col items-center gap-10 text-[2rem]">
          {links.map((n) => (
            <li key={n.href}>
              <Link
                href={n.href}
                className="transition-colors hover:text-zinc-300"
                onClick={onClose}
              >
                {n.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  // Render outside the transformed header
  return createPortal(overlay, document.body);
}
