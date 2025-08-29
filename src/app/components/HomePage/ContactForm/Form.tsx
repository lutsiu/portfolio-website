"use client";

import { useState } from "react";
import { toast } from "sonner";
import useTransition from "@/app/hooks/useTransition";
import { motion } from "framer-motion";

type Values = { name: string; email: string; message: string; hp: string };

export default function Form() {
  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    message: "",
    hp: "",
  });
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const sendPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: values.name.trim(),
        email: values.email.trim(),
        message: values.message.trim(),
        hp: values.hp, // honeypot
      }),
    }).then(async (res) => {
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || "Send failed");
      }
      return data;
    });

    try {
      await toast.promise(sendPromise, {
        loading: "Sending…",
        success: "Message sent! I’ll get back to you soon.",
        error: (err) => err.message || "Send failed",
      });
      setValues({ name: "", email: "", message: "", hp: "" });
    } catch {
      // toast already shown
    } finally {
      setLoading(false);
    }
  }

  const {initial, animate} = useTransition();
  

  return (
    <motion.form 
      onSubmit={onSubmit} className="flex flex-col gap-[2rem] flex-1"
      initial={initial}
      whileInView={animate}
      viewport={{ once: true, amount: 0.35 }}   
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h5 className="font-light text-[3rem]">Send me a message</h5>

      {/* Honeypot (hidden from users) */}
      <label className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
        Leave this field empty
        <input
          type="text"
          name="hp"
          tabIndex={-1}
          autoComplete="off"
          value={values.hp}
          onChange={(e) => setValues((v) => ({ ...v, hp: e.target.value }))}
        />
      </label>

      <input
        type="text"
        name="name"
        placeholder="Name"
        required
        value={values.name}
        onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
        className="
          border-[1px] border-neutral-700 
          rounded-[1rem] px-[1.5rem] py-[0.7rem] text-[1.8rem] outline-none
          text-white placeholder:text-white
          bg-gradient-to-r from-purple-600 to-indigo-600
        "
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        required
        value={values.email}
        onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
        className="
          border-[1px] border-neutral-700 
          rounded-[1rem] px-[1.5rem] py-[0.7rem] text-[1.8rem] outline-none
          text-white placeholder:text-white
          bg-gradient-to-r from-purple-600 to-indigo-600
        "
      />

      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        required
        value={values.message}
        onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
        className="
          border-[1px] border-neutral-700 
          rounded-[1rem] px-[1.5rem] py-[0.7rem] text-[1.8rem] outline-none
          text-white placeholder:text-white
          bg-gradient-to-r from-purple-600 to-indigo-600 resize-none
        "
      />

      <button
        type="submit"
        disabled={loading}
        aria-busy={loading}
        className="
          bg-purple-600 duration-300 hover:bg-indigo-600 
          disabled:opacity-60 disabled:cursor-not-allowed
          w-full px-[3rem] py-[1.5rem] rounded-[0.75rem] cursor-pointer text-[1.7rem]
        "
      >
        {loading ? "Sending…" : "Send message"}
      </button>
    </motion.form>
  );
}
