import React from 'react';
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';
import classes from './Footer.module.scss';

const footer = (props) => (
    <footer className={classes.Footer}>
        <div className={classes.FooterSocial}>
            <a href="https://github.com/bcavenagh"><div className={classes.FooterSocialIcon}><FaGithub size={35}/></div></a>
            <a href="https://www.linkedin.com/in/ben-cavenagh/"><div className={classes.FooterSocialIcon}><FaLinkedinIn size={35}/></div></a>
            <a href="https://www.instagram.com/bcavvs/"><div className={classes.FooterSocialIcon}><FaInstagram size={35}/></div></a>
            <a href="https://www.facebook.com/ben.cavenagh"><div className={classes.FooterSocialIcon}><FaFacebook size={35}/></div></a>
        </div>
        <div className={classes.FooterText}>
            This website was handcrafted by me, for me <br/>
            Ben Cavenagh &copy;2019
        </div>
    </footer>
);

export default footer;