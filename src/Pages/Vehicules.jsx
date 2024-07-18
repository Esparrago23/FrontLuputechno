
import Navbar from '../components/molecules/navbar'
import { Outlet } from 'react-router-dom'

function Vehicules() {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    )
}

export default Vehicules
