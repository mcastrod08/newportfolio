import { projects } from '@/data'
import React from 'react'
import { CardProject } from './CardProject'

const RecentProjects = () => {
  return (
    <div className="py-30">
      <h1 className="heading mb-10"> Recent {" "}
				<span className="text-purple-400">Projects</span>
			</h1>
			{/* es-disable @typescript-eslint/no-unused-variables */}
			<div className="mx-auto grid grid-cols-3 md:grid-cols-3 h-full w-full">
				
				{projects.map(({id, title, des, img, iconLists, github, demo }) => (
					<div
						key={id}
						className=" h-full flex items-center justify-center "
					>
						
						<CardProject title={title} description={des} img={img} github={github} demo={demo}/>
					</div>
				))}
			</div>
    </div>
  )
}

export default RecentProjects