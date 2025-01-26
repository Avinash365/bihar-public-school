import React from 'react';

import { PiChalkboardTeacher } from "react-icons/pi";
import { SchoolName } from './SchoolName';
import { PiList } from "react-icons/pi";

import { DropdownBox, NavLink } from './DropdownBox';


const menuItems = [
    { name: "Teacher", description: "Learn more about our educators." },
    { name: "Gallery", description: "View our collection of memories." },
    { name: "Achievement", description: "Our milestones and awards." },
    { name: "Our Vision", description: "What we aim to achieve." },
    { name: "Mission", description: "Our purpose and goals." },
];


const Navbar = () => {
    return (
        <div
            className="
            text-raspberry 
            sticky 
            grid 
            grid-cols-[1fr,auto]  /* Default for mobile */
            md-1:grid-cols-[280px,_1fr]  /* Medium breakpoint */
            lg-2:grid-cols-[280px,_1fr,200px] /* Large breakpoint */
            gap-6
            w-full 
            max-h-[80px] 
            bg-white 
            shadow-custom 
            pt-3 
            px-4  /* Ensure padding for small screens */
            "
        >
            {/* Left column: SchoolName with custom width of 280px */}
            <div className="flex justify-start items-center ml-0">
                <SchoolName />
            </div>

            {/* Center column: Navigation links */}
            <div className="
                hidden 
                md-1:flex  /* Hidden on mobile, visible from medium breakpoint */
                justify-end 
                gap-5  
                max-h-[60px] 
                overflow-visible"
            >
                <NavLink name="Home" />
                <DropdownBox name="About Us" menuItems={menuItems} col={2} />
                <DropdownBox name="Admission" menuItems={menuItems} col={2} />
                <DropdownBox name="Circulars" menuItems={menuItems} col={2} />
                <DropdownBox name="Resource" menuItems={menuItems} col={2} />
                <NavLink name="Contact Us" />
            </div>

            {/* Right column: Icons */}
            <div className="
                hidden 
                lg-2:flex  /* Visible from large breakpoint */
                justify-end 
                space-x-6 
                items-center"
            >
                <a href='/200'><PiChalkboardTeacher size={40} /></a>
                <a href='/200'><PiChalkboardTeacher size={40} /></a>
                <a href='/200'><PiChalkboardTeacher size={40} /></a>
                
            </div>

            {/* Mobile Menu Icon */}
            <div className="flex items-center md-1:hidden">
                <PiList size={50} className="ml-auto" />
            </div>
        </div>
    );
};

export default Navbar; 
