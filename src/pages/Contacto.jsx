
import { RiMailLine, RiSmartphoneLine, RiMapPinLine } from "react-icons/ri";

const Contacto = () => {
  return (
    <>
      <div className="lg:pl-[340px] w-full p-8 pt-36">
        <div className="bg-[#232323] flex flex-col md:flex-row items-center justify-around p-14">
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <div className="bg-gray-300 pl-6 w-20 h-20 flex items-center rounded-full">
              <RiMailLine className="text-[#2B6771] text-3xl" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg lg:text-xl font-bold text-[#EFD97B]">Email</p>
              <p className="text-md lg:text-lg text-[#b4ab81]">altamiga@gmail.com</p>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <div className="bg-gray-300 pl-6 w-20 h-20 flex items-center rounded-full">
              <RiSmartphoneLine className="text-[#2B6771] text-3xl" />
            </div>
            <div className="flex flex-col items-center gap-2">
              <p className="text-lg lg:text-xl font-bold text-[#EFD97B]">Telefono</p>
              <p className="text-md lg:text-lg text-[#b4ab81]">+54 9 388 577-2940</p>
            </div>
          </div>
          <div className="p-4 flex flex-col items-center justify-center gap-4">
            <div className="bg-gray-300 pl-6 w-20 h-20 flex items-center rounded-full">
              <RiMapPinLine className="text-[#2B6771] text-3xl" />
            </div>
            <div className="flex flex-col items-center gap-2">
            <p className="text-lg lg:text-xl font-bold text-[#EFD97B]">Nuestra direccion</p>
              <p className="text-md lg:text-lg text-center text-[#b4ab81]">Soldado Luna 185 - A. Comedero</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-24">
          <div className="flex flex-col items-center gap-2 max-w-[450px]">
            <h4 className="text-[#EFD97B] text-lg font-bold">Contáctanos</h4>
            <h1 className="text-2xl text-[#EFD97B] font-bold text-center">
              Déjanos Tus Consejos y Sugerencias
            </h1>
            <p className="text-[#b4ab81] text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              dolor ut consectetur, esse beatae impedit facere perferendis.
            </p>
          </div>
        </div>
        <div>
          <form className="p-8 max-w-[800px] m-auto mt-8">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex flex-col w-full gap-2">
                <p className="text-lg text-gray-300">
                  Tu Nombre <span className="text-red-500 text-sm">*</span>
                </p>
                <input
                  type="text"
                  placeholder="Nombre"
                  className="py-1 px-4 outline-none rounded-md"
                />
              </div>
              <div className="flex flex-col w-full gap-2">
                <p className="text-lg text-gray-300">
                  Tu Email <span className="text-red-500 text-sm">*</span>
                </p>
                <input
                  type="email"
                  placeholder="Email"
                  className="py-1 px-4 outline-none rounded-md"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col w-full gap-2">
              <p className="text-lg text-gray-300">
                Tu Mensaje <span className="text-red-500 text-sm">*</span>
              </p>
              <textarea
                placeholder="Mensaje"
                name=""
                id=""
                cols="30"
                rows="5"
                className="py-1 px-4 outline-none"
              ></textarea>
            </div>
            <div className="flex items-center justify-center mt-8">
              <button className="bg-[#2B6771] hover:bg-[#3a8694] w-full md:w-[250px] py-2 px-4 text-gray-300 rounded-md">Enviar</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contacto;
