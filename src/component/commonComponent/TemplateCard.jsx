import React from "react";
import { StarTwoTone } from "@ant-design/icons";

function TemplateCard({image}) {
  return (
    <div className="w-full  max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="p-8 rounded-t-lg"
        src={image}
          alt="product image"
        />
      </a>
      <div className=" flex px-5 pb-5">
        <a href="#">
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
            Normal Template
          </h5>
        </a>
        <div className="ml-auto">
        <StarTwoTone className="text-yellow-500"/>
        </div>
      </div>
    </div>
  );
}

export default TemplateCard;
