import ContactDetailsInfo from "./ContactDetailsInfo";

export default function ContactDetails() {

  return (
    <div className="flex-1 flex flex-col gap-[2rem] md:gap-0 justify-between text-center md:text-left z-10">
      <div>
        <h4 className="text-[2rem] text-purple-400 uppercase font-semibold">I love what I do</h4>
        <h2 className="font-bold text-[6rem] leading-[110%] md:leading-normal md:text-left mt-[2rem]">
          {"Let's get in touch"}
        </h2>
        <p className="text-[1.5rem] leading-[140%] text-neutral-400 mt-[2rem]">
          I’m a full-stack developer in Warsaw who turns ideas into fast, reliable, production-ready apps.
          If you’ve got a project, a role, or just a question, drop me a message—I usually reply within 24 hours.
        </p>
      </div>

      <div className="flex flex-col gap-[2rem]">
        <ContactDetailsInfo title="Email" details="oleksandrlutsiuk2004@gmail.com"/>
        <ContactDetailsInfo title="Availability" details="Mon-Fri, 9:00-17:00, Warsaw, PL"/>
      </div>
      
      <p className="text-[1.4rem] text-zinc-300 font-light">
        Prefer chat? Telegram / LinkedIn / Instagram available on the footer.
      </p>
    </div>
  )
}