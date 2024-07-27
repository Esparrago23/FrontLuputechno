import Label from "../atoms/Label"
import { useNavigate } from "react-router-dom"
import BotonMenu from "../molecules/BotonMenu"

function SectionPrincipalUsuario() {
  const navigate = useNavigate()
  const handlerClickMantenimiento =(e)=>{
      navigate("/Mantenimientous")
  }

  return (
<div className="mt-16">
            <div className="mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
                <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
            </div>
            <div className="flex mt-16 bg-slate-200 justify-evenly max-sm:grid max-sm:gap-4 sm:grid-cols-2">
            
            <BotonMenu title={"Mantenimientos"} image={"/Papel.png"} onClick={handlerClickMantenimiento} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4"/>
            
            </div>
        </div>
  )
}

export default SectionPrincipalUsuario