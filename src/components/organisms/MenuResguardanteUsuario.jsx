import React, { useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Label from "../atoms/Label";
import BotonMenu from '../molecules/BotonMenu';

function MenuResguardanteusuario() {
    const navigate = useNavigate();
    const NavigateToVizualizar =  () =>{
            navigate("/VerResguardanteUs"); // redirige al usuario a la página de login o cualquier otra página
    };
  return (
    <div className="mt-16">
    <div className="mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
        <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
    </div>
    <div className="flex mt-16 bg-slate-200 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2">
        <BotonMenu title={"Visualizar"} image={"/Resguardante.png"} onClick={NavigateToVizualizar}/>
    </div>
</div>
  )
}

export default MenuResguardanteusuario