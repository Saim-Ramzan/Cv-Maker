import React from "react";
import cleanImage from "../../assests/cv images/Clean.jpg";
import halfClean from "../../assests/cv images/halfClean.jpg";
import TemplateCard from "./TemplateCard";
import BasicCard from "../../assests/cv images/basicCard.jpg"
import BasicPlus from "../../assests/cv images/basicPlus.jpg"
import Max from "../../assests/cv images/max.jpg"
import Alpha from "../../assests/cv images/Alpha.jpg"




import { NavLink } from "react-router-dom";

function RenderCard() {
  const iamgeData = [
    {
      image: cleanImage,
      alt: "Normal Template",
      to:"/clean",
      name:"Full Yellow"
    },
    {
      image: halfClean,
      alt: "half Normal",
      to:"/halfclean",
      name:"Half Yellow"
    },
    {
      image: BasicCard,
      alt: "Basic Template",
      to:"/basic",
      name:"Basic Template"
    },
    {
      image: BasicPlus,
      alt: "Basic Plus Template",
      to:"/basicPlus",
      name:"Basic Plus Template"
    },
    {
      image: Max,
      alt: "Max Template",
      to:"/max",
      name:"Max Template"
    },
    {
      image: Alpha,
      alt: "Alpha Template",
      to:"/alpha",
      name:"Alpha Template"
    }
  ];
  return (
    <>
     <div className="grid grid-cols-4 gap-8 m-10">
      {iamgeData.map((item) => (
        <NavLink to={item.to}>
        <TemplateCard image={item.image} alt={item.alt} name={item.name} />
        </NavLink>
      ))}
     </div>
    </>
  );
}

export default RenderCard;
