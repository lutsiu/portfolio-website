import FooterCopyright from "./FooterCopyright";
import FooterNavigation from "./FooterNavigation";


export default function Footer() {

  return (
    <footer className="bg-black/70 text-white flex flex-col mt-[8rem] lg:mt-[15rem] pb-[2rem]">
      <FooterNavigation/>
      <FooterCopyright/>
    </footer>
  )
}