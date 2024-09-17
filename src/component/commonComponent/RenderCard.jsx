import React from "react";
import cleanImage from "../../assests/cv images/cleanTemplate.jpg";
import halfClean from "../../assests/cv images/halfClean.jpg";
import TemplateCard from "./TemplateCard";
import { NavLink } from "react-router-dom";
function RenderCard() {
  const iamgeData = [
    {
      image: cleanImage,
      alt: "Normal Template",
      to:"/clean"
    },
    {
      image: halfClean,
      alt: "half Normal",
      to:"/halfclean"
    },
  ];
  return (
    <>
     <div className="grid grid-cols-5 gap-8 mt-4 ml-10">
      {iamgeData.map((item) => (
        <NavLink to={item.to}>
        <TemplateCard image={item.image} alt={item.alt} />
        </NavLink>
      ))}
     </div>
    </>
  );
}

export default RenderCard;
