import React from 'react'
import css from './People.module.scss'
import { motion } from 'framer-motion'
import { staggerChildren } from '../../src/utils/motion'

const People = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>


      <div className={`yPaddings innerWidth ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>

          <span className="primaryText">
            People Talk about us
          </span>
          <p style={{marginTop:"2rem"}}>
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>
            The process of submitting an application was quite cozy
          </p>

        </div>
      </div>


    </motion.section>
  )
}

export default People
