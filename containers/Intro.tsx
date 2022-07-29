import Header from "@/containers/Header";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import github from 'react-useanimations/lib/github'
import React from "react";
import gsap from "gsap";
import { useLoader, Canvas } from "@react-three/fiber";

import { OrbitControls } from "@react-three/drei";
import UseAnimations from "react-useanimations";

export const Intro = () => {
  const introRef = React.useRef(null);
  const titleRef = React.useRef(null);
  React.useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        introRef.current,
        { xPercent: -100 },
        { xPercent: 0, duration: 1 }
      );
 
  }, []);
  return (
    <div className="w-screen h-screen  bg-white flex xs:flex-col sm:flex-col md:flex-row xs:justify-center md:items-center">
      <div
        className="xs:w-[100vw] sm:w-[100vw] mt-[200px]  flex flex-col md:w-[50vw]  xs:max-h-[50vh] sm:max-h-[50vh] md:max-h-[100vh]  bg-cover  justify-center"
        ref={introRef}
      >
        <p className="font-pixel xs:text-[30px] md:text-[50px] uppercase text-[#5352ED] px-[30px]">
          I'm shiva
        </p>
        <p
          ref={titleRef}
          className="  font-pixel xs:text-[30px] md:text-[50px] uppercase px-[30px] text-[#e63351] "
        >
          myneni
        </p>
        <p className="font-Sora text-[#5352ED] text-[16px] font-bold  px-[30px] capitalize">
          software engineer & React native developer
        </p>
        <p className="font-Sora text-[13px] text-[#5352ED] font-normal  px-[30px] capitalize">
          I have handson experience in mobile app development and web
          development with react native and reactjs.
        </p>
       <div className="flex flex-row px-[30px] mt-[20px]">
         <a href="https://www.instagram.com/_shivamyneni/"><img
          src="/Images/instagram.png"
          className=" xs:h-[60px] sm:h-[60px] md:h-[80px] transition xs:w-[60px] sm:w-[60px] md:w-[80px]  hover:scale-125"

        /></a> 
        <a href='https://www.linkedin.com/in/shivamyneni/'>
         <img
          src="/Images/linkedin.png"
          className=" xs:h-[60px] sm:h-[60px] md:h-[80px] transition xs:w-[60px] sm:w-[60px] md:w-[80px] hover:scale-125"
        /></a>
        <a href='https://twitter.com/Shivamyneni1'>
         <img
          src="/Images/twitter.png"
          className=" xs:h-[60px] sm:h-[60px] md:h-[80px] transition xs:w-[60px] sm:w-[60px] md:w-[80px] hover:scale-125"
        /></a>
        <a href='https://github.com/shivamyneni'>
         <img
          src="/Images/github.png"
          className=" xs:h-[50px] sm:h-[50px] md:h-[60px] transition xs:w-[50px] sm:w-[50px] md:w-[60px] hover:scale-125"
        /></a>
        </div>
      </div>
      <div className="xs:w-[100vw] sm:w-[100vw] md:w-[50vw] xs:h-[50vh] sm:h-[50vh] md:h-[100vh]  ">
        <img
          src="/Images/developer.png"
          className="w-full bg-bottom bg-cover h-full"
        />
      </div>
    </div>
  );
};
