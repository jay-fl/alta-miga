import React from "react";

const ProductoSandwich = ({
  name,
  molde,
  medioMolde,
  imagen,
  media,
  docena,
  lista,
}) => {
  return (
    <div className="bg-[#2B6771] hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#efda7b70] duration-300 w-[250px] md:h-[190px] md:min-w-[650px] lg:min-w-[700px] p-3 rounded-xl flex flex-col md:flex-row md:gap-4">
      <img
        src={imagen}
        className="w-[230px] h-[150px] md:h-full md:w-[250px] m-auto md:m-0 rounded-xl mb-4 object-cover"
      />

      <div className="">
        <h2 className="text-[#EFD97B] text-xl md:text-lg font-bold">{name}</h2>

        <ul className="list-disc p-4 -mt-2">
          {lista.map((ternera, index) => (
            <li className="text-gray-300 text-md md:text-sm" key={index}>
              {ternera}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 justify-around">
        <div className="flex flex-col gap-2">
          <h2 className="text-[#EFD97B] text-xl md:text-lg font-bold">
            Cantidades
          </h2>
          <div className="">
            <div className="flex gap-2 items-center">
              <p className="text-gray-300 text-lg md:text-sm">Media Docena: </p>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-300 text-lg md:text-sm">Docena: </p>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-300 text-lg md:text-sm">Medio Molde: </p>
            </div>
            <div className="flex gap-2">
              <p className="text-gray-300 text-lg md:text-sm">Molde: </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="text-[#EFD97B] text-xl md:text-lg font-bold">
            Precios
          </h2>
          <div className="">
            <div className="flex gap-2 items-center">
              <p className="text-[#EFD97B] text-lg md:text-sm font-bold">
                ${media}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#EFD97B] text-lg md:text-sm font-bold">
                ${docena}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#EFD97B] text-lg md:text-sm font-bold">
                ${medioMolde}
              </p>
            </div>
            <div className="flex gap-2">
              <p className="text-[#EFD97B] text-lg md:text-sm font-bold">
                ${molde}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// text-[#EFD97B]
export default ProductoSandwich;
