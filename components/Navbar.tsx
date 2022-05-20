const Navbar = () => {
    return (
        <div className="xs:w-[40vw] sm:w-[40vw] md:w-[60vw]  flex flex-row  justify-end md:flex xs:hidden sm:hidden">
           <div className="bg-background bg-top bg-cover ml-[20px] "><p className="font-Sora w-fit h-fit bg-white font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  mix-blend-overlay uppercase">ABOUT</p></div>
           <div className="bg-background bg-top bg-cover ml-[20px] "><p className="font-Sora w-fit h-fit bg-white font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  mix-blend-overlay uppercase">projects</p></div>
           <div className="bg-background bg-top bg-cover ml-[20px] "><p className="font-Sora w-fit h-fit bg-white font-bold xs:text-[15px] sm:text-[15px] md:text-[20px]  mix-blend-overlay uppercase">skills</p></div>
 
        </div>
    );
}

export default Navbar;