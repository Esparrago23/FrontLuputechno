import Boton from "../atoms/Boton";
import Img from "../atoms/Img";
function BotonMenu({ image, title,onClick}) {
 return(
    <div onClick={onClick} className="bg-boton-icons  shadow-md rounded-3xl  flex flex-col justify-center items-center  sm:size-20 md:size-24 lg:size-32 xl:size-40 ">
        <Boton title={title}/>
        <Img image={image} className="sm:size-10 md:size-14 lg:size-24 xl:size-32  " ></Img>
    </div>
 )   
}

export default BotonMenu;
