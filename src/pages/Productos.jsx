import ProductoSandwich from "../components/ProductoSandwich";
import ProductoPizza from "../components/ProductoPizza";
import ProductoTorta from "../components/ProductoTorta";
import { Element } from "react-scroll";

const Productos = () => {
  const listaTernera = [
    "Ternera y Queso",
    "Ternera, Queso y Tomate",
    "Ternera, Lechuga y Tomate",
    "Ternera, Huevo y Tomate",
    "Ternera, Huevo y Aceituna",
    "Ternera, Huevo y Zanahoria",
  ];

  const listaJamon = [
    "Jamon y Queso",
    "Jamon, Queso y Tomate",
    "Jamon, Lechuga y Tomate",
    "Jamon, Huevo y Tomate",
    "Jamon, Huevo y Aceituna",
    "Jamon, Huevo y Zanahoria",
  ];

  const listaQueso = [
    "Queso y Salame",
    "Queso, Lechuga y Tomate",
    "Queso, Huevo y Tomate",
    "Queso, Huevo y Aceituna",
  ];

  const listaComun = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
  ];

  const listaComunHuevo = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
  ];

  const listaCalabresa = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
  ];

  const listaNapolitana = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
  ];

  const listaCuatroQuesos = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
  ];

  const listaTorta1 = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
    "Ingrediente 5",
  ];

  const listaTorta2 = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
    "Ingrediente 5",
  ];

  const listaTorta3 = [
    "Ingrediente 1",
    "Ingrediente 2",
    "Ingrediente 3",
    "Ingrediente 4",
    "Ingrediente 5",
  ];

  return (
    <>
      <div className="lg:pl-[340px] w-full p-8 pt-36 ">
        <div className="w-full  p-6">
          <Element name="sanguches">
            <h1 className="text-[#EFD97B] text-4xl mb-14 text-center">
              Sánguches
            </h1>
          </Element>
          {/** Productos */}
          <div className="flex flex-col gap-12 items-center justify-center mb-14">
            {/** Producto */}
            <ProductoSandwich
              name="Ternera"
              imagen="sanguches.jpeg"
              media="2800"
              docena="5200"
              molde="52500"
              medioMolde="26000"
              lista={listaTernera}
            />
            <ProductoSandwich
              name="Jamon"
              imagen="sandwich-jamon-queso2.jpeg"
              media="2600"
              docena="5200"
              molde="52500"
              medioMolde="26000"
              lista={listaJamon}
            />
            <ProductoSandwich
              name="Queso"
              imagen="sandw-nosotros.jpg"
              media="2600"
              docena="5200"
              molde="52500"
              medioMolde="26000"
              lista={listaQueso}
            />
          </div>
          <Element name="pizzas">
            <h1 className="text-[#EFD97B] text-4xl mb-14 text-center">
              Pizzas
            </h1>
          </Element>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 justify-items-center mb-14">
            <ProductoPizza
              name="Común"
              imagen="pizzas-tomate-queso.jpeg"
              precio="800"
              lista={listaComun}
            />
            <ProductoPizza
              name="Común con Huevo"
              imagen="pizzas-champiñon-morron2.jpeg"
              precio="800"
              lista={listaComunHuevo}
            />
            <ProductoPizza
              name="Calabresa"
              imagen="pizzas1.jpg"
              precio="1000"
              lista={listaCalabresa}
            />
            <ProductoPizza
              name="Napolitana"
              imagen="pizzas1.jpg"
              precio="1000"
              lista={listaNapolitana}
            />
            <ProductoPizza
              name="Cuatro Quesos"
              imagen="pizzas1.jpg"
              precio="1200"
              lista={listaCuatroQuesos}
            />
          </div>
          <Element name="tortas">
            <h1 className="text-[#EFD97B] text-4xl mb-14 text-center">
              Tortas
            </h1>
          </Element>
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8 justify-items-center">
            <ProductoTorta
              name="Torta 1"
              imagen="torta.jpg"
              precio="10000"
              lista={listaTorta1}
            />
            <ProductoTorta
              name="Torta 2"
              imagen="torta2.jpeg"
              precio="10000"
              lista={listaTorta2}
            />
            <ProductoTorta
              name="Torta 3"
              imagen="torta3.jpeg"
              precio="10000"
              lista={listaTorta3}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Productos;
