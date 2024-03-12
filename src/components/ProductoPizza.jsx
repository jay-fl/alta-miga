import React from "react";

const ProductoPizza = ({ name, imagen, precio, lista }) => {
  return (
    <div className="bg-[#2B6771] hover:bg- hover:transform hover:scale-105  hover:shadow-lg hover:shadow-[#efda7b70] duration-300 w-[250px]  p-3 rounded-xl flex flex-col">
      <img
        src={imagen}
        className="w-[230px] h-[150px] md:h-full md:w-[250px] rounded-xl mb-4 object-cover"
      />
      <div className="">
        <h2 className="text-[#EFD97B] text-xl md:text-lg font-bold">{name}</h2>

        <ul className="list-disc p-4 -mt-2">
          {lista.map((pizza, index) => (
            <li className="text-gray-300 text-md md:text-sm" key={index}>
              {pizza}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col">
        <h2 className="text-[#EFD97B] text-xl md:text-lg font-bold">Precio</h2>
        <div className="flex gap-3 items-center">
          <p className="text-gray-300 text-md md:text-sm">Por unidad: </p>
          <p className="text-[#EFD97B] text-lg md:text-md font-bold">
            ${precio}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductoPizza;
