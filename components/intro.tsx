"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsLinkedin } from 'react-icons/bs';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';



export default function intro() {
    const { ref } = useSectionInView("Home", 0.2);
    const { activeSection,setActiveSection, setTimeOfLastClick } = useActiveSectionContext();


  return (
    <section className=' mb-28 scroll-mt-[100rem] sm:mb-0 max-w-[50rem]' id="home" ref={ref}>
                <div className='flex items-center space-x-3 justify-center flex-col sm:flex-row'>
                            <div className='relative'>
                                    <motion.div
                                          initial={{ x:-100}} 
                                          animate={{ x: -300, opacity:1 }}
                                          transition={{ type: "spring", stiffness: 100 }}
                                        
                                          >
                                                      <Image src="/headshot2.png" alt="headshot" 
                                                          width="350" 
                                                          height="350"
                                                          quality="95"
                                                          priority={true}
                                                          className="h-50 w-50 rounded-full object-cover left-1/2 translate-x-3/4 sm:translate-x-7/8 border-[0.5rem] border-white">
                                                            
                                                      </Image>
                                    </motion.div>
                            </div>

                            <motion.div
                            initial={{ x:-100, opacity:0}} 
                            animate={{x:0, opacity:1}}
                            transition={{ delay: 0.2, type: "spring", stiffness: 100}}
                            >
                                    <h1 className="text-8xl font-bold"> Rachit Saini </h1>
                                    <div className="flex flex-col sm:flex-row pt-4 text-lg font-medium" >
                                              <Link href="#contact" className="group bg-gray-900/90 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-800 active:scale-105 transition" 
                                                    onClick={() => {
                                                      setActiveSection("Contact")
                                                      setTimeOfLastClick(Date.now())
                                                    }}>Contact me here</Link>
                                      
                                        <a  className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
                                        href="/rachitsaini.pdf"
                                        download>Download CV</a>
                                      
                                        <a className='flex-col sm:flex-row justify-center bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60' href="https://www.linkedin.com/in/rachit-saini-a7262b227/" target="_blank"></a>
                                    </div>
                            </motion.div>
                </div>
       
    </section>


  )
}
