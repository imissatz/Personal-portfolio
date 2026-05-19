import React from 'react'
import css from './Footer.module.scss'
import { footerVariants, staggerChildren } from '../../src/utils/motion'
import {motion} from 'framer-motion'

const Footer = () => {
  return (
<motion.section 
variants={staggerChildren}
initial="hidden"
whileInView="show"
viewport={{once:false, amount: 0.25}}

className={`paddings ${css.wrapper}`}>
    <motion.div 
    variants={footerVariants}
    className={`innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
            <span className="primaryText">
                Let's make something <br /> Together
            </span>

            <span className="primaryText">
                Start by <a href="Check Me:issamasalatz@gmail.com"> saying hi </a>
            </span>
        </div>


        <div className={css.right}>
            <div className={css.info}>
                <sapn className="secondaryText">
                    Information
                </sapn>
                <p>
                    145 Dar Es Salaam, P.O.Box 6565, Tanzania
                </p>
            </div>

            <div className={css.menu}>
                <li>Services</li>
                <li>Works</li>
                <li>Notes</li>
                <li>Experince</li>

            </div>
        </div>
    </motion.div>
</motion.section>
  )
}

export default Footer
