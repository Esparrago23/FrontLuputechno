import { Outlet } from 'react-router-dom'
import Navbar from '../molecules/navbar'

function VehiculoDropdown() {
    return (
        <div>
            <Navbar/>
            <Outlet></Outlet>
        </div>
    )
}

export default VehiculoDropdown
