import React from 'react'
import css from './Works.module.scss'
import { motion } from 'framer-motion'
import { fadeIn, staggerChildren, textVariant2, zoomIn } from '../../src/utils/motion'
import { workExp } from '../../src/utils/data'




const Works = () => {
    return (
        <motion.section
            variants={staggerChildren}
            initial="hidden"
            whileInView="show"
            className={`paddings ${`flexCenter innerWidth ${css.wrapper}`}`}>

            <a className="anchor" id="work"></a>
            <div className={css.container}>
                <span className="primaryText">My Work Experience</span>

                <div className={`flexCenter ${css.experience}`}>
                    {
                        workExp.map((exp, i) => {
                            return <motion.div className={`flexCenter ${css.exp}`} variants={textVariant2} key={i}>
                                <div className={css.post}>
                                    <h1>{exp.place}</h1>
                                    <p>{exp.tenure}</p>

                                </div>
                                <div className={css.role}>
                                    <h1>{exp.role}</h1>
                                    <p>{exp.detail}</p>

                                </div>
                            </motion.div>
                        })
                    }

                    <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
                        <motion.div variants={fadeIn("down", "tween", 2,1.5)} className={css.line}></motion.div>
                        <div><div className={css.circle} style={{ background: "#286F6C" }}></div></div>
                        <div><div className={css.circle} style={{ background: "#F2704E" }}></div></div>
                        <div><div className={css.circle} style={{ background: "#EEC048" }}></div></div>

                    </motion.div>

                </div>

            </div>
        </motion.section>
    )
}

export default Works
