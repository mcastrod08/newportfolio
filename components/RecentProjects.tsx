import { projects } from '@/data'
import React from 'react'
import { CardProject } from './CardProject'

const RecentProjects = () => {
  return (
    <div className="py-30 px-5">
      	<h1 className="heading mb-10"> Recent {" "}
			<span className="text-purple-400">Projects</span>
		</h1>
			{/* es-disable @typescript-eslint/no-unused-vars */}
		<div className="mx-auto grid lg:grid-cols-3 md:grid-cols-2  md:gap-4 sm:grid-cols-1 h-full w-full">
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