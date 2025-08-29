import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  direction: "left" | "right";
  onClick: () => void;
}

export default function CarouselButton({direction, onClick}: Props) {

  return (
    <Icon
      icon={`material-symbols-light:chevron-${direction}-rounded`}
      width="50"
      height="50"
      className="cursor-pointer duration-300 hover:text-neutral-300"
      onClick={onClick}
    />
  )
}