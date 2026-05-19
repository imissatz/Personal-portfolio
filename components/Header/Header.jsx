import React, { useRef, useState } from 'react'
import css from './Header.module.scss'
import { BiPhoneCall, BiMenuAltRight } from 'react-icons/bi'
import { motion } from 'framer-motion'
import { getMenuStyles, headerVariants } from '../../src/utils/motion'
import useHeaderShadow from '../../src/hooks/useHeaderShadow'
import useOutsideAlerter from '../../src/hooks/useOutsideAlerter'


const Header = () => {

  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef()

  useOutsideAlerter(
    {
      menuRef,
      setMenuOpened
    }
  )
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
      style={{ boxShadow: headerShadow }}
    >

      <div className={`flexCenter innerWidth ${css.container}`}>

        <div className={css.name}>
          Issa
        </div>
        <ul
        ref = {menuRef}
          style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li><a href="#expertise">Service</a></li>
          <li><a href="#work">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#people">Testimonials</a></li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+12 456-789-678</p>
            <BiPhoneCall size={'40px'} color='var(--blue)' />
          </li>
        </ul>

        {/* For medium and small screens */}

        <div className={`${css.menuIcon}`}
          onClick={() => setMenuOpened((prev) => !prev)}>
          <BiMenuAltRight size={'30px'} />
        </div>
      </div>
    </motion.div>
  )
}

export default Header
