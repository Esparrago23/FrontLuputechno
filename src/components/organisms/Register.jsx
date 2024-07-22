import Button from "../atoms/Button"
import Label from "../atoms/Label"
import Field from "../molecules/Field"


function Register() {
  return (
    <form>
    <div className="flex flex-col items-center justify-center w-[400px] h-[500px] space-y-8 bg-white rounded-2xl shadow-md">
        <div className="text-4xl font-thin text-black">
                <Label text="Registrate"/>
            </div>
            <div className="space-y-4 w-[300px] font-thin">
                <Field text="Nombre" type="text" placeholder="Ingrese su nombre"></Field>
                <Field text="Contraseña" type="password" placeholder="Crea una contraseña"></Field>
            </div>
            <div className="w-1/2 block px-3 py-2 m-3 bg-[#e1ecf4] rounded-[3px] border border-[#7aa7c7] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] box-border text-[#39739d] cursor-pointer inline-block text-[13px] font-normal leading-[1.15385] m-0 outline-none py-2 px-[0.8em] relative text-center no-underline select-none align-baseline whitespace-nowrap hover:bg-[#b3d3ea] hover:text-[#2c5777] focus:bg-[#b3d3ea] focus:text-[#2c5777] focus:shadow-[0_0_0_4px_rgba(0,149,255,0.15)] active:bg-[#a0c7e4] active:shadow-none active:text-[#2c5777] border rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1">
                <Button title="Crear cuenta"/>
            </div>
        </div>
    </form>
  )
}

export default Register