import { workExperience } from '@/data'
import React from 'react'

const Experience = () => {
  return (
    <div className="pb-30 px-5" id="projects">
      <h1 className="heading mb-10"> Work {" "}
				<span className="bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent">Experiencie</span>
			</h1>
			<div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
				{workExperience.map((work) => (
					<div key={work.id}>{work.title}</div>
				))}
			</div>
		</div>	

  )
}

export default Experience