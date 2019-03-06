import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import { FaAngleDown, FaPencilRuler, FaCode, FaGithub, FaLinkedinIn, FaFacebook, FaInstagram } from 'react-icons/fa';
import classNames from 'classnames';
import Companies from '../Companies/Companies';
import Drip from './Drip/Drip';
import './Home.css';

import avatar from '../../assets/images/Me.JPG';
import Heartland from '../../assets/images/logos/hfpg.png';
import Splenda from '../../assets/images/logos/splenda.png';
import JavaHouse from '../../assets/images/logos/jh.png';
import RadioFlyer from '../../assets/images/logos/rf.png';
import AubryLane from '../../assets/images/logos/al.png';
import GoSplash from '../../assets/images/logos/gs.png';

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
            ],
            avatarClass: classNames(classes.Avatar),
            isFlipped:false,
            coinClass:classNames("ch-info"),
        }
        this.toggleFlip = this.toggleFlip.bind(this);
        this.onScroll = this.onScroll.bind(this)
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll, false);
    }
    componentWillUnmount() {
        // you need to unbind the same listener that was binded.
        window.removeEventListener('scroll', this.onScroll, false);
    }
    onScroll(){
        let parent = document.getElementById('parallax-container');
        if(!parent){console.log('The element ' + parent + ' does not exist.');return;}
        let children = parent.getElementsByTagName('div');
        let cover = document.getElementById('cover');
        for(let i = 0; i < children.length; i++){
            children[i].style.transform = 'translateY(' + (window.pageYOffset * i / children.length) + 'px)';
        }
        cover.style.height = (window.pageYOffset)*0.8 + "px";
    
        // let heroPos = document.getElementById("avatar");
        
        // if(heroPos.getBoundingClientRect().top <= 0){
        //     this.setState({
        //         avatarClass: classNames(classes.Avatar, classes.mini)
        //     })
        // }else{
        //     if(this.state.avatarClass !== null){
        //         this.setState({
        //             avatarClass: classNames(classes.Avatar)
        //         })
        //     }
        // }
        
    }
    toggleFlip(){
        let isFlipped = this.state.isFlipped;
        this.setState(function(previousState, currentProps) {
            return{
                isFlipped: !previousState.isFlipped
            }
        });
    }
    render(){
        return(
            <>
            <div className={classes.Hero}>
                <div id="cover" className={classes.BlackCover} ></div>
                <div id='parallax-container'>
                    <Drip color='Black'/>
                    <Drip color='Yellow'/>
                    <Drip color='Pink'/>
                    <Drip color='Blue'/>
                </div>
                <div id="intro" className={classes.Intro}>
                    {/* <div id="avatar" className="ch-item ch-img-1" onClick={this.toggleFlip}> */}
                    <div id="avatar" className="ch-item ch-img-1">
                        {/* <div className={this.state.isFlipped ? classNames("ch-info-wrap", classes.Flip) : classNames("ch-info-wrap", classes.Unflip)}> */}
                        <div className="ch-info-wrap">
                            <div className="ch-info">
                                <div className="ch-info-front ch-img-1"></div>
                                <div className="ch-info-back"></div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.HeroText}>
                        <h1>Web Developer and Designer</h1>
                        <h3>I help make the web and I love what I do.</h3>
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
                        <Link to={'/contact'}><button>Let's Chat!</button></Link>
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
                    <a href="https://github.com/bcavenagh"><div className={classes.FooterSocialIcon}><FaGithub size={35}/></div></a>
                    <a href="https://www.linkedin.com/in/ben-cavenagh/"><div className={classes.FooterSocialIcon}><FaLinkedinIn size={35}/></div></a>
                    <a href="https://www.instagram.com/bcavvs/"><div className={classes.FooterSocialIcon}><FaInstagram size={35}/></div></a>
                    <a href="https://www.facebook.com/ben.cavenagh"><div className={classes.FooterSocialIcon}><FaFacebook size={35}/></div></a>
                </div>
            </footer>
            </>
        );
    }
}            

export default Home; 