

const Nosotros = () => {
  return (
    <>
      <div className="lg:pl-[340px] w-full p-8 pt-36">
        <div className="flex flex-col lg:flex-row items-center justify-around mb-12">
            <div className="max-w-[480px] 2xl:max-w-[580px] flex flex-col items-center gap-8 p-4">
                <h1 className="text-4xl md:text-5xl text-[#EFD97B] font-bold">Nosotros</h1>
                <p className="text-lg md:text-xl 2xl:text-2xl text-gray-300 tracking-widest mb-8 lg:mb-0 ml-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos dolorem et necessitatibus minus praesentium natus beatae reiciendis sapiente odit, nulla nobis adipisci eligendi similique facere enim sit expedita absintial sapiente odit eligendi.</p>
            </div>
          <div className="ring-8 ring-[#2B6771] rounded-2xl">
            <img src="/nosotros-1.jpeg" className="h-[200px] w-[400px] xl:h-[300px] xl:w-[500px] object-cover rounded-2xl " /> 
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around">
            <div className="max-w-[480px] 2xl:max-w-[580px] flex flex-col items-center gap-8 p-4 lg:order-1">
                <h1 className="text-4xl md:text-5xl text-[#EFD97B] font-bold">Objetivos</h1>
                <p className="text-lg md:text-xl 2xl:text-2xl text-gray-300 tracking-widest mb-8 lg:mb-0 ml-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde dignissimos dolorem et necessitatibus minus praesentium natus beatae reiciendis sapiente odit, nulla nobis adipisci eligendi similique facere enim sit expedita absintial sapiente odit eligendi.</p>
            </div>
          <div className="ring-8 ring-[#2B6771] rounded-2xl">
            <img src="nosotros-2.jpeg" className="h-[200px] w-[400px] xl:h-[300px] xl:w-[500px] object-cover rounded-2xl" /> 
          </div>
        </div>
        
       
      </div>
    </>
  );
};

export default Nosotros;
