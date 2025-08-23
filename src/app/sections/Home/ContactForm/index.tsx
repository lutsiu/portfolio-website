import ContactDetails from "@/app/components/HomePage/ContactForm/ContactDetails";
import Form from "@/app/components/HomePage/ContactForm/Form";

export default function ContactForm() {

  return (
    <section className="mt-[15rem] relative">
      <div className="flex gap-[7rem]">
        <Form/>
        <ContactDetails/>
      </div>
      {/* <div className="absolute top-[0] right-[10%] w-[50rem] h-[50rem] 
                bg-gradient-to-br from-purple-600 to-indigo-700 
                rounded-full blur-3xl opacity-40" /> */}
    </section>
  )
}