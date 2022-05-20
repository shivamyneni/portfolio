import Navbar from "@/components/Navbar";
import React from "react";
import gsap from 'gsap'


const Header = () => {
const headerRef=React.useRef(null)
    React.useEffect(()=>{
gsap.fromTo(headerRef.current,{yPercent:-100},{yPercent:0,duration:1})

    },[])
    return (
        <div className="w-screen h-fit xs:px-[15px] sm:px-[15px] md:px-[40px] xs:py-[15px] sm:py-[15px] md:py-[40px] fixed flex flex-row justify-between" ref={headerRef}>
           <div className="xs:w-[40vw] sm:w-[40vw] md:w-[25vw] h-fit  ">
               <p className=" text-white font-bold xs:text-[15px] sm:text-[15px] md:text-[20px] font-Sora uppercase">SHIVAMYNENI</p>
           </div>
           <Navbar/>
        </div>
    );
}

export default Header;