import React from "react";
import Navbar from "../components/molecules/navbar";
import MenuVehiculos from "../components/organisms/MenuVehiculos";
function Vehiculos() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex justify-center mt-16">
    
    <div className="flex justify-center w-full mt-16 bg-slate-200">
        <MenuVehiculos className="w-full md:w-auto" />
    </div>
</div>

    </div>
  );
}

export default Vehiculos;
