import ContactDetails from "@/app/components/HomePage/ContactForm/ContactDetails";
import Form from "@/app/components/HomePage/ContactForm/Form";

export default function ContactForm() {

  return (
    <section className="mt-[8rem] lg:mt-[15rem] relative">
      <div className="flex flex-col md:flex-row gap-[7rem]">
        <Form/>
        <ContactDetails/>
      </div>
      <div className="hidden md:absolute bottom-[0] right-[10%] w-[50rem] h-[50rem] 
                bg-gradient-to-br from-purple-600 to-indigo-700 
                rounded-full blur-3xl opacity-40" />
    </section>
  )
}