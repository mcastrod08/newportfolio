import { workExperience } from '@/data'
import React from 'react'
import { GlareCard } from './ui/GlareCard'

const Experience = () => {
  return (
    <div className="pb-30 px-5" id="projects">
      <h1 className="heading mb-10"> Work {" "}
				<span className="bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent">Experiencie</span>
			</h1>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((work) => (
					<GlareCard  key={work.id}>
						<div className="flex flex-col items-start justify-end py-8 px-6">
							<img src={work.thumbnail}/>
							<h1 className="font-bold text-white text-lg mt-5">{work.title}</h1>
							<p className="font-normal text-base text-neutral-200 mt-4">
								{work.desc}
							</p>
							info de cuanto tiempo duré y lista de actividades.
						</div>
					</GlareCard>
				))}
			</div>
		</div>	

  )
}

export default Experience