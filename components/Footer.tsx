import React from 'react'
import CopyButton from './ui/CopyButton'
import { FaLocationArrow } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="pt-30 w-full" id="contact">
			<div className="flex flex-col items-center">
				<h1 className="heading"> When do we start working {" "}
					<span className="bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent">together?</span>
				</h1>
				<p className="py-5 text-center text-white-200 text-[18px] ">Reach out to me today and let&apos;s discuss how i can help you achieve your goals </p>
				<a href="mailto:mcastrod08@gmail.com" className="pt-10">
					<CopyButton title="Let's get in touch" icon={<FaLocationArrow/>}/>
				</a>
			</div>

			<div className="pt-15 pb-10 flex justify-center ">
				<p className="text-[16px] flex">Copyright © Frontend Developer - María Castro - 2025 <img src="./signature.png" alt="signature" width={100} className="ml-[1rem] -mt-[1rem]"/></p>
				
			</div>
      
    </footer>
  )
}

export default Footer