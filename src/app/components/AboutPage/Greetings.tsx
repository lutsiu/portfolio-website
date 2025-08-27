import AboutPageTitle from "./AboutPageTitle";

interface Props {
  description: string;
  resume: string;
}

export default function Greetings({description, resume}: Props) {

  return (
    <div>
      <div>
        <AboutPageTitle title="Hi, I'm Oleksandr Lutsiuk"/>
        <p>
          {description}
        </p>
        <button>Download Resume</button>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  )
}