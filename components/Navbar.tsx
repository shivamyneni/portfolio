const Navbar = () => {
    return (
        <div className="xs:w-[40vw] sm:w-[40vw] md:w-[60vw]  flex flex-row  justify-end md:flex xs:hidden sm:hidden">
           <div className=" bg-top  ml-[20px] "><p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  uppercase">contact</p></div>
           
           <div className=" bg-top  ml-[20px]  "><p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  mix-blend-overlay uppercase">work experience</p></div>
           <div className=" bg-top  ml-[20px]  "><p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  mix-blend-overlay uppercase">projects</p></div>
           <div className=" bg-top  ml-[20px] "><p className="font-Sora w-fit h-fit text-[#5352ED] font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  mix-blend-overlay uppercase">skills</p></div>
 
        </div>
    );
}

export default Navbar;