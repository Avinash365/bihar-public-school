import { CiFacebook } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiTwitter } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { MdOutlineSportsBaseball } from "react-icons/md"; 

import { GetINTouch,ReachUs } from "./GetINTouch.js";

const Footer = () => {
    return (
        <div className="font-inter">
            <div className="grid grid-cols-[1fr] md:grid-cols-[100px,2fr,1.8fr] gap-2">
                <img
                    src="/image.png"
                    alt="example"
                    className="w-[80px] h-[100px] self-end hidden md:block"
                />
                <GetINTouch  />
                <ReachUs />
            </div>
            <div className="bg-raspberry50 flex flex-wrap h-[70px] px-11 items-center justify-between text-raspberry">
                <p>
                    @ 2024 SPORT UI. ALL RIGHTS RESERVED.
                </p>
                <div className="flex gap-3">
                    <CiFacebook />
                    <CiInstagram />
                    <CiTwitter />
                    <FaLinkedinIn />
                    <FaWhatsapp />
                    <MdOutlineSportsBaseball />
                </div>
            </div>
        </div>
    )
}
export default Footer;

/* Get In Touch */




