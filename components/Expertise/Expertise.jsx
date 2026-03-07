import React from 'react'
import css from './Expertise.module.scss'
import { projectExperience, WhatDoIHelp } from '../../src/utils/data'
import { motion } from 'framer-motion'
import { staggerContainer } from '../../src/utils/motion'

const Expertise = () => {
  return (
    <motion.section
    variants={staggerContainer}
    initial='hidden'
    whileInView="show"
    viewport={{once: false, amount: 0.25}} 
    className={css.wrapper}>
        <div className={`paddings yPaddings flexCenter innerWidth ${css.container}`}>
            <div className={css.leftSide}>

                {
                   projectExperience.map((exp, i)=>{
                    return <div className={css.exp} key={i}>
                        <div className="flexCenter" style={{background: exp.bg}}>
                          <exp.icon size={25} color="white"/>  
                        </div>
                        <div>
                        <span>{exp.name}</span>
                        <span className='secondaryText'>{exp.projects} Projects</span>
                    </div>

                    </div>
                   })
                }

            </div>
             <div className={css.rightSide}>
            <span className="primaryText">What do I help?</span>
            {
                WhatDoIHelp.map((paragraph, i)=> {
                    return <span className='secondaryText' key={i}>{paragraph}</span>
                })
            }

            <div className={`flexCenter ${css.stats}`}>
                <div className={`flexCenter ${css.stat}`}>
                    <span className='primaryText'>285+</span>
                    <span className='secondaryText'>Project Complete</span>
                </div>

                <div className={`flexCenter ${css.stat}`}>
                    <span className='primaryText'>190+</span>
                    <span className='secondaryText'>Happy Clients</span>
                </div>
            </div>

        </div>
        </div>

       
    </motion.section>
  )
}

export default Expertise
