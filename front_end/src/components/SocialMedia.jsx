import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href="https://www.facebook.com/bastos743">
        <FaFacebookF />
      </a>
    </div>
    <div>
      <a href="https://github.com/bastosnz74">
        <AiFillGithub />
      </a>
    </div>
  </div>
);

export default SocialMedia;