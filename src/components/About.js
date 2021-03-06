import React from 'react'
import { motion } from 'framer-motion'

function About() {
    return (
        <>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 2 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
    >
        <div className="section" id="about">
            <div className="row container">
                <div className="col s12">
                    <h5>As a rare Seattle native and 1st generation-immigrant-milennial in the 21st century, I have learned that finding your niche ain't easy.
                        <br /><br />I went from working as barista for 7 years (I can make a mean machiatto), to a Chemist, to Dental Assistant to now lead me here; a Software Developer!
                        <br /><br /> Development has rapidly become a place I feel challenged, excited, and eager to learn more and create better. A place where my creative mind and inner child can thrive. Hit the contact button and let's create something
                        cool together.
                    </h5>
                </div>
            </div>
        </div>
        </motion.div >
        </>
    );
}

export default About;