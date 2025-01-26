
const SchoolName = () => {
    return (
        <div 
        className="w-fit p-2 flex flex-col items-center justify-center min-w-[280px] cursor-pointer">
            <p 
            className="font-bold text-lg-custom mb-2">BIHAR PUBLIC SCHOOL</p>
            <div 
            className="flex items-center w-fit">
                <Line />
                <p 
                className="font-light text-xs-custom mx-2">Siwan India</p>
                <Line />
            </div>
        </div>
    );
};


const Line = () => {
    return (
        <div 
        className="flex flex-col items-center justify-center">
            <hr 
            className="border-raspberry border-t-1 w-[50px] mb-0.5" />
            <hr 
            className="border-raspberry border-t-1 w-[50px] mt-0.5" />
        </div>
    );
}; 

export {SchoolName}; 