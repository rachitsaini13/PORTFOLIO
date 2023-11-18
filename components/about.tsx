"use client"; 

import React from 'react'
import SectionHeading from './section-heading'
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

 
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
