import React from "react";

// eslint-disable-next-line
function TemplateCard({image ,name}) {
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
            {name}
          </h5>
        </a>

      </div>
    </div>
  );
}

export default TemplateCard;
