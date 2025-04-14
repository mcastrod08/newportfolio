import { projects } from '@/data'
import React from 'react'
import { CardProject } from './CardProject'

const RecentProjects = () => {
  return (
    <div className="py-20">
      <h1 className="heading"> Recent {" "}
				<span className="text-purple-400">Projects</span>
			</h1>

			<div className="flex flex-wrap iems-center justify-center p-4 gap-16 mt-10">
				{projects.map(({id, title, des, img, iconLists, link }) => (
					<div
						key={id}
						className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
					>
						
						<CardProject  />
					</div>
				))}
			</div>
    </div>
  )
}

export default RecentProjects