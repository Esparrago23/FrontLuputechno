import Label from "../atoms/Label";
import Principal from "../molecules/Principal";
function SectionMenuResguardante() {
  return (
    <div>
      <div className="mb-4 text-xl text-center sm:text-2xl md:text-3xl lg:text-4xl text-stone-950">
        <Label className="m-2 font-semibold" text="Resguardante" />
      </div>
      <div className="grid w-full grid-cols-. gap-4 sm:grid-cols-2 lg:grid-cols-4 ">
        <Principal image={"/Resguardante.png"} text="Visualizar."/>
        <Principal image={"/pen-svgrepo-com(2).svg"} text="Editar." />
      </div>
    </div>
  );
}

export default SectionMenuResguardante;
