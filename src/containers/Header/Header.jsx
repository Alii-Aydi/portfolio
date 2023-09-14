import React from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { images } from '../../constants';
import './header.styles.scss';
import './glich.styles.scss';

const scaleVariants = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

const Header = () => (
  <div id='home' className="app__header app__flex">
    <motion.div
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className="app__header-info"
    >
      <div className="app__header-badge">
        <div className="badge-cmp">
          <h1>Hello, I am <span class="glitch-wrapper">
            <span class="glitch" data-text="Ali">Ali</span>
          </span></h1>
          <h3>Developer</h3>
          <p>Experienced developer passionate about crafting clean, efficient code. Committed to solving complex problems and delivering innovative solutions with precision.</p>
        </div>

        <div className="tag-cmp">
          <button>Download cv</button>
        </div>
      </div>
    </motion.div>

    <motion.div
      whileInView={{ opacity: [0, 1] }}
      transition={{ duration: 0.5, delayChildren: 0.5 }}
      className="app__header-img"
    >
      <div>
        <img src={images.profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1], transition: { duration: 1, ease: 'easeInOut' } }}
          animate={{ rotate: 360, transition: { duration: 6, repeat: Infinity, ease: 'linear' } }}
          src={images.clipCircul}
          alt="profile_circle"
          className="overlay_circle"
        />
      </div>
    </motion.div>

    <motion.div
      variants={scaleVariants}
      whileInView={scaleVariants.whileInView}
      className="app__header-circles"
    >
      {[images.react, images.node, images.sass].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="profile_bg" />
        </div>
      ))}
    </motion.div>
  </div>
);

export default AppWrap(Header, 'home');
