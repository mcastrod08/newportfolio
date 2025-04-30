import { workExperience } from '@/data'
import React from 'react'
import { GlareCard } from './ui/GlareCard'

const Experience = () => {
  return (
    <div className="pt-30" id="work">
      <h1 className="heading mb-10"> Work {" "}
				<span className="bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent">Experience</span>
			</h1>
		<div className="flex lg:justify-between flex-wrap sm:justify-center pt-10 px-10 ">
			{workExperience.map((work) => (
				<GlareCard  key={work.id} className="rounded-2xl" >
					<div className="items-start justify-end py-8 px-6 ">
						<img src={work.thumbnail}/>
						<h1 className="font-bold text-white text-lg mt-5">{work.title}</h1>
						<p className="font-normal text-base text-neutral-200 mt-4">
							{work.desc}
						</p>
					</div>
				</GlareCard>
			))}
		</div>
	</div>	

  )
}

export default Experience