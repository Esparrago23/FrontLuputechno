import { useRef, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import Label from "../atoms/Label";
import Field from "../molecules/Field";
import UserContext from "../../context/userContext";

function SecionLogin() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const value = useContext(UserContext);

    const handleClick = async (e) => {
        e.preventDefault();
        setError(null);
        
        try {
            const response = await fetch(`${import.meta.env.VITE_URL_API}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Authorization': sessionStorage.getItem('token')
                },
                body: JSON.stringify({ "username": username, "password": password })
            });
            if (!response.ok) {
                throw new Error('Error en la autenticación');
            }
    
            const authorizationHeader = response.headers.get('Authorization');
            const info= await response.json()
            
            
            if(info.roles=="admin")
                navigate("/Principal");
                else 
                navigate("/PrincipalUsuario");
            if (authorizationHeader) {
                sessionStorage.setItem('Info', JSON.stringify(info));
                sessionStorage.setItem('token', authorizationHeader);
                console.log('Token stored:', sessionStorage.getItem('token'));
                
            } else {
                throw new Error('No authorization token received');
            }
        } catch (error) {
            setError(error.message);
            console.error('Authentication error:', error);
        }
        value.setUser({name:JSON.parse(sessionStorage.getItem('Info')).username, rol:JSON.parse(sessionStorage.getItem('Info')).roles})
    };
    

    return (
        <form>

        <div className="flex flex-col items-center justify-center w-[400px] h-[500px] space-y-8 bg-white rounded-2xl shadow-md">
            <div className="text-4xl font-thin text-black">
                <Label text="Bienvenido" />
            </div>
            <div className="space-y-4 w-[300px] font-thin">
                <Field text="usuario" type="text" placeholder="Ingresa tu usuario" value={username} onChange={setUsername} />
                <Field text="Contraseña" type="password" placeholder="Ingresa tu contraseña" value={password} onChange={setPassword} />
            </div>
            {error && <div className="text-red-500">{error}</div>}
            <div className="w-1/2 block px-3 py-2 m-3 bg-[#e1ecf4] rounded-[3px] border border-[#7aa7c7] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.7)] box-border text-[#39739d] cursor-pointer inline-block text-[13px] font-normal leading-[1.15385] m-0 outline-none py-2 px-[0.8em] relative text-center no-underline select-none align-baseline whitespace-nowrap hover:bg-[#b3d3ea] hover:text-[#2c5777] focus:bg-[#b3d3ea] focus:text-[#2c5777] focus:shadow-[0_0_0_4px_rgba(0,149,255,0.15)] active:bg-[#a0c7e4] active:shadow-none active:text-[#2c5777] border rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 sm:text-sm focus:ring-1">
                <Button title="Iniciar Sesión" onClick={handleClick}></Button>
            </div>
            <div>
                
            </div>
        </div>
        </form>
    );
}

export default SecionLogin;