import { CiFacebook } from "react-icons/ci";

const GetINTouch = () => {
    return (
        <div >
            <Heading text='Get In Touch' />
            <IconText text='Bihar Public School' text1='Sr.Sec.School, Goshala Road, Vijayhta, Siwan, Bihar' />
            <IconText text='+91 9599000000 +91 9696969696 ' />
            <IconText text='msvmsiwan@yahoo.com =, info@msvmsiwan.org' />
            <IconText text='Facebook' />
            <IconText text='Twitter' />
        </div>
    )
}

const ReachUs = () => {
    return (
        <div>
            <Heading text='Reach Us' />
            <img src='/image1.png' className="w-[600] h-[230]" />
        </div>
    )
}


const IconText = (props) => {
    return (
        <div className="flex items-center gap-4 p-2">
            <CiFacebook size={30} color='#A21A4C' />
            <p className="font-regular text-[12px]">
                {props.text}
                <br />
                {props.text1}
            </p>
        </div>
    )
}
const Heading = (props) => {
    return (
        <>
            <h1 className="text-raspberry  font-semibold text-[30px] leading-[36px] tracking-[0.19em] ml-2 mb-10">{props.text}</h1>
        </>
    )
}

export {GetINTouch, ReachUs}; 