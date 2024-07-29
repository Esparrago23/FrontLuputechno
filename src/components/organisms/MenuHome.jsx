import Label from "../atoms/Label"
import { useNavigate } from "react-router-dom"
import BotonMenu from "../molecules/BotonMenu"

function MenuHome() {
    const navigate = useNavigate()
    const handlerClick = (e) => {
        navigate("/MenuVehiculos")
    }
    const handlerClickMantenimiento =(e)=>{
        navigate("/MenuMantenimiento")
    }

    return (
<div className="mt-16">
    <div className="mb-4 text-xl text-center bg-slate-200 sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
        <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center mt-16 bg-slate-200 p-4">
        <div className="w-full sm:w-auto">
            <BotonMenu 
                title={"Vehículos"} 
                image={"/Vehiculos.png"} 
                onClick={handlerClick} 
                className="w-full sm:w-64" 
            />
        </div>
        <div className="w-full sm:w-auto">
            <BotonMenu 
                title={"Mantenimientos"} 
                image={"/Papel.png"} 
                onClick={handlerClickMantenimiento} 
                className="w-full sm:w-64" 
            />
        </div>
    </div>
</div>
    )
}

export default MenuHome;