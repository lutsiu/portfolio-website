import Title from "@/app/components/title";
import { Icon } from "@iconify/react/dist/iconify.js";
import technologies from "@/app/data/Technologies";
import SeeMore from "@/app/components/SeeMoreLink/SeeMoreLink";

export default function TechnologiesSection() {
  return (
    <section className="mt-[15rem]">
      <Title title="Technologies I use" />
      <ul className="mt-[5rem] flex flex-wrap items-center justify-center gap-10 md:justify-between">
        {technologies.map((t) => (
          <li key={t.id} className="group">
            <Icon
              icon={t.icon}
              width={100}
              height={100}
              aria-label={t.name}
              className={[
                "cursor-pointer transition-transform duration-300 ease-in-out",
                "group-hover:scale-110",
                t.hover 
              ].join(" ")}
            />
          </li>
        ))}
      </ul>
      <div className="mx-auto w-fit mt-[8rem]">
        <SeeMore title="Check more" url="/about"/>
      </div>
    </section>
  );
}
