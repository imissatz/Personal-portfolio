import React from 'react'
import css from './Header.module.scss'
import { BiPhoneCall } from 'react-icons/bi'
import {motion} from 'framer-motion'
import { headerVariants } from '../../src/utils/motion'


const Header = () => {
  return (
    <motion.div 
    initial= "hidden"
    whileInView = "show"
    variants={headerVariants}
    viewport={{once: false, amount: 0.25}}
    className={`paddings ${css.wrapper}`}>

      <div className={`flexCenter innerWidth ${css.container}`}>

        <div className={css.name}>
          Issa
        </div>
        <ul className= {`flexCenter ${css.menu}`}>
          <li><a href="">Service</a></li>
          <li><a href="">Experience</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+12 456-789-678</p>
            <BiPhoneCall size={'40px'} color='var(--blue)' />
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
