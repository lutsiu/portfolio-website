
export default function Form() {
  return (
    <form className="flex flex-col gap-[2rem] flex-1"> 
      <h5 className="font-light text-[3rem] ">Send me a message</h5>
      <input 
        type="text" 
        name="name-input" 
        placeholder="Name"
        className="
            border-[1px] border-neutral-700 
          rounded-[1rem] px-[1.5rem] py-[0.7rem] text-[1.8rem] outline-none
          placeholder:text-white
          bg-gradient-to-r from-purple-600 to-indigo-600
        "
      />
      <input 
        type="email" 
        name="email-input" 
        placeholder="Email"
        className="
            border-[1px] border-neutral-700 
          rounded-[1rem] px-[1.5rem] py-[0.7rem] text-[1.8rem] outline-none
          placeholder:text-white
          bg-gradient-to-r from-purple-600 to-indigo-600
        "
      />
      <textarea 
        name="message-input" 
        placeholder="Message"
        rows={6}
        className="
            border-[1px] border-neutral-700 
          rounded-[1rem] px-[1.5rem] py-[0.7rem] text-[1.8rem] outline-none
          placeholder:text-white
          bg-gradient-to-r from-purple-600 to-indigo-600 resize-none
        "

      />
      <button className="
              bg-purple-600 duration-300 hover:bg-indigo-600 
              w-full px-[3rem] py-[1.5rem] rounded-[0.75rem] cursor-pointer text-[1.7rem]"
      >
        Send message  
      </button>
    </form>
  )
}