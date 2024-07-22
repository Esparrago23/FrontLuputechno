

import Register from "../components/organisms/Register";
import Img from "../components/atoms/Img";
function RegisterUser() {
    return(
        <>
        <div className=" border-solid bg-gradient-to-b h-[100vh] flex justify-center items-center bg-azullogin ">
        <div className="flex items-center p-2 space-x-2 ">
            <div>
                <Img image="Logo.png"></Img>
            </div>
            <div className="h-3/6">
                <div>
                    <Register></Register>
                </div>
                
            </div>
        </div>
        </div>
        </>
    )
}
export default RegisterUser;