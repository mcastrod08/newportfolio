import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id="about" className="pt-30 lg:px-10 ">
      <BentoGrid>
				{gridItems.map(({id, title, description, className, titleClassName, img, imgClassName, spareImg }) => (
					<BentoGridItem
						id={id}
						key={id}
						title={title}
						description={description} 
						className={className}
						titleClassName={titleClassName}
						img={img}
						imgClassName = {imgClassName}
						spareImg = {spareImg}
					/>
				))}
			</BentoGrid>
    </section>
  )
}

export default Grid