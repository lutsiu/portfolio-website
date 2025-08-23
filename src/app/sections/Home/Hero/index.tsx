
export default function HeroSection() {
  
  return (
    <section className="relative pt-[10rem]">
      <div className="flex flex-col gap-[2rem]">
        <h1 className="text-[6rem] leading-[100%]">Oleksandr Lutsiuk</h1>
        <h4 className="text-[2rem]">Full-Stack Developer</h4>
        <p className="leading-[2.3rem] text-[1.7rem]">
          I build fast, responsive, and user-friendly web applications using modern technologies like React, Next.js, Spring Boot and Node.js.
          <br />
          Passionate about turning ideas into real products that solve problems and create value.
        </p>
        <button className="
                bg-purple-600 duration-300 hover:bg-indigo-600 
                w-fit px-[3rem] py-[1.5rem] rounded-[0.75rem] cursor-pointer text-[1.7rem]">
          View Projects
        </button>
      </div>

      {/* <div className="absolute top-[3rem] right-[15%] w-[50rem] h-[40rem] 
                bg-gradient-to-br from-purple-600 to-indigo-700 
                rounded-full blur-3xl opacity-40" /> */}
    </section>
  )
}