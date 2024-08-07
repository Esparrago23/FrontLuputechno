import Label from "../atoms/Label"
import { useNavigate } from "react-router-dom"
import BotonMenu from "../molecules/BotonMenu"

function MenuVehiculos() {
    const navigate = useNavigate()
    const handleClickGasolina = () => {
        navigate("/Vehicules/Gasolina");
    };

    const handleClickMotos = () => {
        navigate("/Vehicules/Motos");
    };
    const handleClickDiesel = () => {
        navigate("/Vehicules/Diesel");
    };
    const handleClickComodato = () => {
        navigate("/Vehicules/Comodato");
    };

    return (

    <div className="mt-16">
            <div className="bg-slate-200 mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
    <Label className="m-2 font-bold" text="¡LISTO PARA TRABAJAR!" />
</div>
<div className="bg-slate-200 grid grid-cols-2 gap-4 lg:flex lg:justify-evenly mt-16">
    <div className="p-2">
        <BotonMenu onClick={handleClickGasolina} className="font-semibold" image={"/gasoline.svg"} title={"Gasolina"} />
    </div>
    <div className="p-2">
        <BotonMenu onClick={handleClickDiesel} image={"/gasolineBlack.svg"} title={"Diesel"} />
    </div>
    <div className="p-2">
        <BotonMenu onClick={handleClickMotos} image={"/Moto.png"} title={"Motos"} />
    </div>
    <div className="p-2">
        <BotonMenu onClick={handleClickComodato} image={"/Comodato.png"} title={"Comodatos"} />
    </div>
</div>

        </div>

    
    )
}

export default MenuVehiculos;