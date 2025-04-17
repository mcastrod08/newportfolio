'use client'
import { cn } from "@/utils/utils";
import { GradientBg } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import { useState } from "react";
import CopyButton from "./CopyButton";
import { IoCopyOutline } from "react-icons/io5";


export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid  grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id: number;
  img: string;
  imgClassName?: string;
  titleClassName?: string,
  spareImg?: string;
}) => {

  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('mcastrod08@gmail.com');
    setCopied(true);
  }

  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 relative overflow-hidden flex flex-col justify-between space-y-4 rounded-3xl border border-purple-500/[0.2] bg-black transition duration-200 hover:shadow-xl",
        className,
      )}
      style={{
        background: 'rgb(4,7,29)',
        backgroundColor: 'linear-gradient(90deg,rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)',
      }}
    >

      <div className={`${id === 6 && 'flex justify-center' } `}>
        <div className="w-full h-full absolute">
          {img && (
            <img 
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover, object-center')}
            />
          )}
        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
        {spareImg && (
            <img 
              src={spareImg}
              alt={spareImg}
              className={ 'object-cover, object-center w-full h-full'}
            />
          )}
        </div>

      
      </div>
      
      {id === 6 && (
        <GradientBg>
          <div className="absolute z-50 flex sm:text-center justify-center text-white font-bold"/>
        </GradientBg>
      )}

      <div className={cn(
        titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
      )}>
        <div className="font-sans text-sm  md:text-xs lg:text-base z-10 font-extralight text-[#c1c2d3]">
          {description}
        </div>
        <div className="mt-2 mb-2 font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
      
        {id===2 && <GlobeDemo />}

        {id===3 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['HTML', 'CSS', 'JavaScript'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg_text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}

              <span className="py-4 sm:py-6px-3 rounded-lg text-center bg-[#10132E]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 sm:py-6 px-3 rounded-lg text-center bg-[#10132E]" />
              {['React.Js', 'TailwindCSS', 'Wordpress'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg_text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}

              
            </div>

          </div>
        )}

        {id===4 && (
          <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
            <div className="flex flex-col gap-3 lg:gap-8">
              {['Attention to details', 'Organization', 'Bilingual (Es|En)'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg_text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}

              <span className="py-4 sm:py-6 px-3 rounded-lg text-center bg-[#10132E]" />
            </div>
            <div className="flex flex-col gap-3 lg:gap-8">
            <span className="py-4 sm:py-6 px-3 rounded-lg text-center bg-[#10132E]" />
              {['Time managment', 'Problem solving', 'Autodidactic'].map((item) => (
                <span key={item} className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg_text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                  {item}
                </span>
              ))}

              
            </div>

          </div>
        )}

        {id === 6 && (
          <div className="mt-5 relative">
            
            <CopyButton 
              title={copied ? 'Email copied' : 'Copy my Email'}
              icon={<IoCopyOutline />}
              otherClasses="!bg-[#161a31]"
              handleClick={handleCopy}
              
            />
          </div>
        )}
      
      </div>
    </div>  
  );
};
