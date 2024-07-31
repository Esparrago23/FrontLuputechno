import React from "react";
import Navbar from "../components/molecules/navbar";
import MenuVehiculos from "../components/organisms/MenuVehiculos";
function Vehiculos() {
  return (
      <>
      <Navbar></Navbar>
      <div className="flex justify-center mt-16">
    
    <div className="flex justify-center w-full mt-16 bg-slate-200">
        <div className="w-full mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
          <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
        </div>
      <div className="flex justify-center w-full mt-16 bg-slate-200">
        <MenuVehiculos className="w-full md:w-auto" />
      </div>
    </div>

    </div>
      </>
  );
}

export default Vehiculos;
