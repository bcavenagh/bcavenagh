import React, { Component } from 'react';
import classes from './Home.module.scss';
import avatar from '../../assets/images/AVATAR.png';
import { FaAngleDown, FaPencilRuler, FaCode, FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';
import classNames from 'classnames';
import Companies from '../Companies/Companies';
import Drip from './Drip/Drip';

import Heartland from '../../assets/images/logos/hfpg.png';
import Splenda from '../../assets/images/logos/splenda.png';
import JavaHouse from '../../assets/images/logos/jh.png';
import RadioFlyer from '../../assets/images/logos/rf.png';
import AubryLane from '../../assets/images/logos/al.png';
import GoSplash from '../../assets/images/logos/gs.png';

import Blue from '../../assets/images/drip-blue.png';
import Pink from '../../assets/images/drip-pink.png';
import Yellow from '../../assets/images/drip-yellow.png';
import Black from '../../assets/images/drip-black.png';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            companies:[
                {name:'Splenda', logoSrc: Splenda},
                {name:'Java House', logoSrc: JavaHouse},
                {name:'Radio Flyer', logoSrc: RadioFlyer},
                {name:'Aubry Lane', logoSrc: AubryLane},
                {name:'Go Splash', logoSrc: GoSplash},
                {name:"Heartland FPG", logoSrc: Heartland}
            ]
        }
    }
    // componentDidMount(){
    //     window.addEventListener('scroll', this.handleScroll);
    // }
    handleScroll(){
        // console.log('scroll')
        // let scrollTop = window.scrollY;
        // console.log(scrollTop);
        

    }
    render(){

        return(
            <>
            <div className={classes.Hero}>
                <div id='parallax-container'>
                    <Drip color='Black' speed={0.1}/>
                    <Drip color='Yellow' speed={0.3}/>
                    <Drip color='Pink' speed={0.6}/>
                    <Drip color='Blue' speed={1}/>
                </div>
                <div className={classes.Intro}>
                    <img src={avatar} alt="Avatar" className={classes.Avatar}/>
                    <div className={classes.HeroText}>
                        <h1>Web Developer and Designer</h1>
                        <h3>I help make the web and I love it.</h3>
                    </div>
                </div>
                <div className={classes.SeeMore}>
                    <p>See More About Me</p>
                    <FaAngleDown/>
                </div>
            </div>
            <div className={classes.Content}>
                <div className={classes.AboutSection}>
                    <div className={classes.About}>
                        <div className={classes.AboutText}>
                            <h3>Hey! I'm Ben. Nice to meet you!</h3>
                            <p>Let me tell you a little about myself. I am a recent Butler University graduate and currently a UI/UX developer for Heartland Food Products Group, owner of Splenda and Java House. I have been programming for about 7 years now and have a variety of different experiences under my belt ranging from large international companies like Radio Flyer and Splenda to smaller startups like Aubry Lane and Java House. My main focus has always been front-end devlopment and I have recently started to pick up more web design in my free time. I am quick to learn, calm-natured, and I love what I do. Have an idea? Let's make it a reality.</p>
                        </div>
                    </div>
                    <div className={classes.SplitTable}>
                        <div className={classNames(classes.Column, classes.ColumnSeparator)}>
                            <FaCode color='rgb(95, 211, 247)' size={45}/>
                            <h2>Front-End Development</h2>
                            <p>Throughout my years in development I have gained knowledge of an assortment of different languages however, my heart has always been with front-end development.</p>
                            <h4>My favorite languages:</h4>
                            <ul>
                                <li>React/React Native</li>
                                <li>JavaScript</li>
                                <li>HTML</li>
                                <li>CSS/Sass</li>
                            </ul>
                            <h4>Tools I Use:</h4>
                            <ul>
                                <li>VS Code</li>
                                <li>Github</li>
                                <li>Foundation</li>
                                <li>WordPress</li>
                            </ul>
                        </div>
                        <div className={classes.Column}>
                            <FaPencilRuler color='rgb(95, 211, 247)' size={45}/>
                            <h2>Design</h2>
                            <p>I have always considered myself a creative person so naturally my next step from development was to start learning design.</p>
                            <h4>I like to design:</h4>
                            <ul>
                                <li>UI/UX</li>
                                <li>Mobile</li>
                                <li>Apps</li>
                                <li>Logos</li>
                            </ul>
                            <h4>Tools I Use:</h4>
                            <ul>
                                <li>Photoshop</li> 
                                <li>XD</li>
                                <li>Illustrator</li>
                                <li>Pen &amp; Paper</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.CollabContainer}>
                    <div className={classes.Collab}>
                        <div className={classes.Interested}>
                            <h3>Interested in working together?</h3>
                            <p>I'm always looking for something new to do. Send me a message and lets chat.</p>
                        </div>
                        <button>Let's Chat!</button>
                    </div>
                </div>
    
                <div className={classes.Companies}>
                     <h1>Who I've Worked For</h1>
                    <Companies companies={this.state.companies}/>
                </div>
                
            </div>
            <footer className={classes.Footer}>
                <div className={classes.FooterText}>
                    This website was handcrafted by me, for me <br/>
                    Ben Cavenagh &copy;2019
                </div>
                <div className={classes.FooterSocial}>
                    <div className={classes.FooterSocialIcon}><FaGithub size={35}/></div>
                    <div className={classes.FooterSocialIcon}><FaLinkedinIn size={35}/></div>
                    <div className={classes.FooterSocialIcon}><FaInstagram size={35}/></div>
                    <div className={classes.FooterSocialIcon}><FaFacebook size={35}/></div>
                </div>
            </footer>
            </>
        );
    }
}
window.addEventListener('scroll', () => {
    let parent = document.getElementById('parallax-container');
    let children = parent.getElementsByTagName('div');
    for(let i = 0; i < children.length; i++){
        children[i].style.transform = 'translateY(-' + (window.pageYOffset * i / children.length) + 'px)';
    }
}, false)
export default Home; 
