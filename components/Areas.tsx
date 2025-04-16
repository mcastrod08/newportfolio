"use client";
import React from "react";
import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/CanvasRevealEffect";
import { FaGift } from "react-icons/fa";

export function Areas() {
  return (
    <div className="pt-30">
    	<h1 className="heading mb-10"> Areas Where I Can {" "}
				<span className="bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent">Contribute </span>
			</h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4 mx-auto px-8">
        <Card title="Frontend Web Developer" description="+1 year of experience" button={<Button title="Hover" icon={<FaGift/>}/>}>
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card title="Web Designer" description="+2 year of experience" button={<Button title="Hover" icon={<FaGift/>}/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/90" />
        </Card>
        <Card title="Project Manager " description="+2 year of experience" button={<Button title="Hover" icon={<FaGift/>}/>}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </div>
  );
}

const Card = ({
  title,
  description,
  button,
  children,
}: {
  title: string;
  description: string;
  button?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border  group/canvas-card flex items-center justify-center border-white/[0.2] rounded-2xl  max-w-sm w-full mx-auto p-4 relative h-[30rem] relative"
    >
      

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20">
        <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
          {button}
        </div>
        <h2 className="text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-xs opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-white mt-4  font-normal group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">{description}</p>
      </div>
    </div>
  );
};

const Button = ({title, icon}:{title:string, icon:React.ReactNode}) => {
  return (
    <button 
        className="p-[3px] relative sm:flex hidden"
        
    >
        <div className="absolute inset-0 bg-gradient-to-r from-white to-purple-800 rounded-lg "  />
        <div className={`flex px-10 py-2 gap-2 bg-[#000319] rounded-[6px]  relative group text-white  `}>
            {title} <span className="mt-1">{icon}</span>
        </div>
    </button>
  );
};


