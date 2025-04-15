"use client";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import MagicButton from "./ui/MagicButton";
import { GiBottomRight3dArrow } from "react-icons/gi";
 
export function CardProject({title, description, img, github, demo, iconLists} : {title:string; description:string; img:string, github:string, demo:string, iconLists: string[]}) {
  return (
    <CardContainer className="inter-var">
      <CardBody className=" relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-purple-500/[0.2] bg-[rgb(4,7,29)] " >
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-white mt-2"
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-500 text-sm max-w-sm mt-2 "
        >
					{description}
        </CardItem>
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-6"
        >
          <img
            src={img}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        
        <CardItem
          translateZ="100"
          rotateX={20}
          rotateZ={-10}
          className="w-full mt-6"
        >
        <div className="flex items-center justify-between mt.7 mb-3">
          <div className="flex items-center">
            {iconLists.map((icon, index) =>(
              <div 
                key={index}
                className="border border-white/[0.2] rounded-full bg-black lg:w-10 w-8 h-8 flex justify-center items-center"
              >
                <img src={icon} alt={icon} className="p-2" />
              </div>
            ))}
          </div>
        </div>
        </CardItem>

        <div className="flex justify-between items-center mt-20">
          
          <a href={demo} className="px-4 py-2 rounded-xl text-xs font-normal" target="_blank">
						Demo →
					</a>
          
					<MagicButton title="Github" icon={<GiBottomRight3dArrow />} otherClasses="px-4 py-2 rounded-[6px] bg-black  text-white text-xs font-bold" href={github}/>
          
            
        
          
          
        </div>
      </CardBody>
    </CardContainer>
  );
}
