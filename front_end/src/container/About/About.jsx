import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { images } from '../../constants';
import './About.scss';
import { urlFor, client } from '../../client';

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => {
      setAbouts(data);
    });
  }, []);


    return (
      <>
        <h2 className="head-text"><span> A Propos</span></h2>
        <div className="app__profiles">
        <p className="p-text2">Je m'appelle Bastien Marozza et je suis installé à Annecy en Haute-Savoie. De caractère curieux et introverti, je suis un passionné d'informatique et de design. Attiré par la technologie, je me suis formé pour devenir développeur full-stack.
        Cela m'a permis par la suite de pouvoir créer des sites web et applications mobiles.
        Les trois points les plus importants pour moi sont : compréhension, optimisation, satisfaction.</p>
          {abouts.map((about, index) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={about.title + index}
            >
              <img src={urlFor(about.imgUrl)} alt={about.title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
            </motion.div>
          ))}
        </div>
      </>
    )
}

export default AppWrap(
MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);