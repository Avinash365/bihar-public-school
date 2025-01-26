import '../../style/about.css'; 
import { BsTriangleFill } from "react-icons/bs";
import DropdownMenu from "./DropdownMenu";


const DropdownBox = ({ name, menuItems, col }) => {
    return (
        <div className='relative flex flex-col gap-9 items-center group w-[100px]  overflow-visible'>
            <NavLink name={name} />
            <div className="w-fit min-w-[450px] h-fit text-raspberry bg-[#FFF6F9] shadow-custom p-6 hidden group-hover:block">

                <BsTriangleFill size={40} className="ml-auto mr-auto -mt-14 text-[#FFF6F9]" />

                <p className="text-4xl font-medium mb-2 mt-1">{name}</p>

                {/* Dynamically set grid columns */}
                <div className={`grid grid-cols-2 gap-4`}>
                    {menuItems.map((item, index) => (
                        <DropdownMenu
                            key={index}
                            name={item.name}
                            description={item.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};  

const NavLink = ({ name }) => {
    return (
        <div className="group pt-2">
            <p
                className="relative w-fit p-2 pb-3 cursor-pointer group">
                {name}
                <span className="absolute left-0 bottom-0 w-0 h-[4px] bg-[#A21A4C] transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </p>
        </div>
    );
};  

export {NavLink, DropdownBox}; 