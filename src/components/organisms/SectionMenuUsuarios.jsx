import Label from "../atoms/Label"
import Principal from "../molecules/Principal"
function SectionMenuUsuarios() {
return (
    <div>
    <div className="mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
        <Label className="m-2 font-bold" text="LISTO PARA TRABAJAR EN RESGUARDANTE!" />
      </div>
      <div className="grid w-full grid-cols-. gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <Principal  image={"/AddUseer.png"} text="Añadir." />
        <Principal
          image={"/users.png"}
          text="Visualizar."
        />
        <Principal
          image={"/pen-svgrepo-com(2).svg"}
          text="Editar."
        />
        <Principal
          image={"/trash-xmark-svgrepo-com.svg"}
          text="Eliminar."
        />
      </div>
  </div>
)
}

export default SectionMenuUsuarios