"use client"
import React from 'react'

const CopyButton = ({
    title, icon, otherClasses, handleClick }: {
        title:string; icon:React.ReactNode, otherClasses?:string, handleClick?: () => void } ) => {
    	
  return (
    <button 
        className="p-[3px] relative cursor-pointer"
        onClick={handleClick}
    >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
        <div className={`flex px-10 py-2 gap-2 bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent ${otherClasses}`}>
            {title} <span className="mt-1">{icon}</span>
        </div>
    </button>
  )
}

export default CopyButton