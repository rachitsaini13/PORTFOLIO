"use client"; 

import React, {useEffect} from 'react'
import SectionHeading from './section-heading'
import { useInView } from 'react-intersection-observer';
import { useActiveSectionContext } from '@/context/active-section-context'

import { useSectionInView } from "@/lib/hooks"

export default function about() {
  const { ref } = useSectionInView("About", 0.6);

 
  return (    
   <section ref ={ref} className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28' id="about">
  
    <SectionHeading>About me</SectionHeading>
    <p>I'm a <span className='font-medium'>data analyst</span> and multimedia creator fueled by a love of learning and self-improvement. 
        I'm eager to find opportunities where I can put my analytical skills and creative flair to use.
         I love knowing the cause and predicting the effects. I like learning from data. 
When I'm not coign, I enjoy playing guitar and making short videos. I also enjoy learning new things. I am currently learning about data journalism and how to make a brand.</p>
   </section>
  )
}
