"use client";

import { useReducedMotion } from "framer-motion";

export default function useTransition() {
  const reduce = useReducedMotion();

  const initial = reduce
    ? { opacity: 0 }
    : { opacity: 0, y: 50, filter: "blur(6px)" };

  const animate = reduce
    ? { opacity: 1 }
    : { opacity: 1, y: 0, filter: "blur(0px)" };

  return {initial, animate}
}