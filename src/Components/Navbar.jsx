
import {
    FaHome,FaInfoCircle,FaServicestack,FaEnvelope,FaBars
} from "react-icons/fa"
function Navbar(){
    return(
        <>
        <div className="navbar flex justify-between items-center bg-blue-950 mx-auto p-4 text-white">
        <h1 className="font-bold text-3xl">🚀My Website</h1>
        <ul className="flex gap-15 hidden lg:flex ">
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-2 hover:underline"><FaHome/> Home</a></li>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-1 hover:underline"><FaInfoCircle/>About</a></li>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-1 hover:underline"><FaServicestack/>Services</a></li>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-2 hover:underline"><FaEnvelope/>Contact</a></li>
        </ul>
        <h2 className='lg:hidden text-2xl cursor-pointer' id='menu' ><FaBars /></h2>
        {/* <ul className=" hidden bg-amber-50 text-black top-0 text-left p-2 flex flex-col gap-10 mt-10" id='sideMenu'>
            <h2 className='text-right' id='close'>X</h2>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-2"><FaHome/> Home</a></li>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-1"><FaInfoCircle/>About</a></li>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-1"><FaServicestack/>Services</a></li>
            <li><a href="" className="text-1xl hover:text-blue-400 flex items-center gap-2"><FaEnvelope/>Contact</a></li>
        </ul> */}
        </div>

        </>
    )

}



export default Navbar