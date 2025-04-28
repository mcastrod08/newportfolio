import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import CopyButton from './ui/CopyButton'
import { PiArrowBendRightDownFill } from "react-icons/pi";


const Hero = () => {
  return (
    <div className="pb-50 pt-36">
			<div>
				<Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white"/>
        <Spotlight className="-top-10 left-full h-[80vh] w-[50vw]" fill="blue"/>
				<Spotlight className="-top-10 left-80 h-[80vh] w-[50vw]" fill="blue"/>
			</div>
			
      <div className="flex justify-center my-20 z-10">
        <div className="max-w-[89vw] md:msx-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">Hello World!</h2>
          <TextGenerateEffect 
            className="text-[40px] text-center md:text-5xl lg:text-6xl"
            words="Frontend Developer with React Js"/>
          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">I am María Castro</p>
        </div>
			</div>

      <div className="flex justify-center">
        <a className='cursor-pointer' href="#about">
          <CopyButton title="My work" icon={<PiArrowBendRightDownFill />}/>
        </a>
      </div>
				
    </div>
  )
}

export default Hero