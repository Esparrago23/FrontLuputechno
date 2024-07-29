import React from "react";
import Navbar from "../components/molecules/navbar";
import MenuVehiculos from "../components/organisms/MenuVehiculos";

function Vehiculos() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="mt-16 flex justify-center">
    <div className="bg-slate-200 mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950 w-full">
        <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
    </div>
    <div className="bg-slate-200 w-full flex justify-center mt-16">
        <MenuVehiculos className="w-full md:w-auto" />
    </div>
</div>

    </div>
  );
}

export default Vehiculos;
