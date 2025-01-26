
import { PiChalkboardTeacher } from "react-icons/pi";

const DropdownMenu = ({ name, description }) => {
    return (
        <div
            className=' cursor-pointer flex items-center gap-2  p-2  hover:bg-[#d9c0c8] transition-colors duration-300'>
            <PiChalkboardTeacher size={30} className='border border-[#bd6d8a]' />
            <div
                className='w-[150px]'>
                <h1
                    className='font-bold text-lg-custom'>{name}</h1>
                <p
                    className='text-xs-custom text-foreground'>
                    {description}
                </p>
            </div>
        </div>
    )
}; 
export default DropdownMenu; 
