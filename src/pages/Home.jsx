import React from "react";

const Home = () => {
  return (
    <>
      
      <div className="lg:pl-[340px] w-full p-8 pt-36">
        <div className="flex flex-col lg:flex-row justify-around mt-4 md:mt-8 p-4 items-center">
          
            <div className="flex flex-col p-8 gap-2 md:gap-8 text-center mb-12 order-1 lg:order-none ">
              <h1 className="text-xl tracking-[5px]  xl:text-3xl 2xl:text-5xl uppercase text-[#EFD97B]">
                El mejor sabor, precio y calidad
              </h1>

              <p className="text-lg xl:text-xl tracking-[5px]  text-[#b4ab81]">
                Hacé tu pedido y te lo enviamos a la brevedad
              </p>
              <p className="text-lg xl:text-xl  text-[#EFD97B]">
                Tel: +54 9 388 577-2940
              </p>
              <div className="mt-8 md:mt-2 m-auto hover:transform hover:scale-105">
              <a aria-label="Chat on WhatsApp" href="https://wa.me/5493885772940" target="_blank"><img alt="Chat on WhatsApp" src="WhatsAppButtonGreenSmall.png" className="shadow-xl shadow-green-800 w-48"/>
              </a>
              </div>
              
            </div>
         
          <div className="ring-8 ring-[#2B6771]  rounded-full md:ml-4 lg:ml-0">
            <img
              src="home-principal.jpeg"
              className="rounded-full w-64 h-64 md:w-96 md:h-96 lg:w-72 lg:h-64 xl:w-72 xl:h-64 2xl:w-96 2xl:h-96 object-cover"
            />
          </div>
        </div>
        <div className="flex flex-wrap   justify-center items-center gap-12 lg:mr-64 xl:mr-64 2xl:mr-96 ">
          <div><img src="hero.webp" className="w-48 h-48  lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 object-cover shadow-md rounded-xl " /></div>
          <div><img src="home-secundaria.jpeg" className="w-48 h-48 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 object-cover shadow-md rounded-xl " /></div>
          <div><img src="torta.jpg" className="w-48 h-48 lg:w-40 lg:h-40 xl:w-40 xl:h-40 2xl:w-48 2xl:h-48 object-cover shadow-md rounded-xl " /></div>
        </div>
      </div>
    </>
  );
};

export default Home;
