import React from 'react';

const Navbar = () => {
    return ( 
        <div className='text-raspberry sticky flex items-center w-auto bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]'>
            <SchoolName/> 
            <NavButton name = "Home" /> 
            <NavButton name="Contact Us" /> 
        </div>
    );
};
export default Navbar;


const NavButton = ({ name }) => {
    return (
        <div className="group">
            <p className="w-fit transition-all duration-3000 border-b-4 border-transparent group-hover:border-raspberry p-2 cursor-pointer">
                {name}
            </p>
        </div>
    );
};
 


const SchoolName = () =>{
    return (
        <div className="w-fit p-2 flex flex-col items-center justify-center">
            <p className="font-bold text-lg-custom mb-2">BIHAR PUBLIC SCHOOL</p>
            <div className="flex items-center w-fit">
                <Line />
                <p className="font-light text-xs-custom mx-2">Siwan India</p>
                <Line />
            </div>
        </div>
    );
};

const Line = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <hr className="border-raspberry border-t-1 w-[50px] mb-0.5" />
            <hr className="border-raspberry border-t-1 w-[50px] mt-0.5" />
        </div>
    );
};

