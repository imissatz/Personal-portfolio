import React from 'react'
import css from './Hero.module.scss'


const Hero = () => {
  return (
<section className={`padding ${css.wrapper}`}>
    <div className={`innerWidth ${css.container}`}>

          {/* Upper Element */}
      <div className={css.upperElements}>
        <span className='primaryText'> Hey There, <br /> I'm Issa.
        </span>
        <span className='secondaryText'>I design beautiful and simple <br />
        things, And I love what I do
        </span>
      </div>

      {/* Person Image */}
      <div className={css.person}>
        <img src='./person.png' alt="" />
      </div>

      {/* Email */}
      <a href="mailto:issamasalatz@gmail.com" className={css.email}>issamasalatz@gmail.com</a>

      {/* Lower Elements */}
      <div className={css.lowerElements}>

      <div className={css.experience}>
        <div className="primaryText">10</div>
        <div className="secondaryText">
          <div>Years</div>
          <div>Experience</div>
        </div>
      </div>
      <div className={css.certificate}>
        <img src="./certificate.png" alt="" />
        <span>CERTIFIED PROFESSIONAL</span>
        <span>UI/UX DESIGNER</span>
      </div>
    </div>
    </div>
</section>      
  )
    }

        export default Hero
        