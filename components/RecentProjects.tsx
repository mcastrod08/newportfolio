import { projects } from '@/data'
import React from 'react'
import { CardProject } from './CardProject'

const RecentProjects = () => {
  return (
    <div className="pt-30 px-10" id="projects">
      	<h1 className="heading mb-10"> Recent {" "}
			<span className="bg-gradient-to-r from-white to-indigo-600 bg-clip-text text-transparent">Projects</span>
		</h1>
			{/* es-disable @typescript-eslint/no-unused-vars */}
		<div className="flex justify-center flex-wrap  pt-10">
			{projects.map(({id, title, des, img, github, demo, iconLists }) => (
				<div
					key={id}
					className="lg:col-span-1 md:col-span-1 sm:col-span-1 xs:col-span-1"
				>
					<CardProject title={title} description={des} img={img} github={github} demo={demo} iconLists={iconLists}/>
				</div>
			))}
		</div>
    </div>
  )
}

export default RecentProjects