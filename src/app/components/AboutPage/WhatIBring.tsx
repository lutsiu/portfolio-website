import AboutPageTitle from "./AboutPageTitle";
import WhatIBringCard from "./WhatIBringCard";

interface Props {
  productMindsetList: string[];
  qualityAndSpeedList: string[];
  communicationList: string[];
}

export default function WhatIBring({
  productMindsetList, 
  qualityAndSpeedList, 
  communicationList}: Props) {

  return (
    <div className="mt-[7rem]">
      <div className="text-center md:text-left">
        <AboutPageTitle title="What I bring"/>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-[3rem] mt-[3rem]">
        <WhatIBringCard 
          title="Product mindset"
          list={productMindsetList}  
        />
        <WhatIBringCard 
          title="Quality & Speed"
          list={qualityAndSpeedList}  
        />
        <WhatIBringCard 
          title="Communication"
          list={communicationList}  
        />
      </div>
    </div>
  )
}