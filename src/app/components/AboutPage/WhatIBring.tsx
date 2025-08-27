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
    <div>
      <h4>What I bring</h4>
      <div>
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