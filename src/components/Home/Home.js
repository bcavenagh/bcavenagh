import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.scss';
import { FaAngleDown, FaPencilRuler, FaCode, FaComment } from 'react-icons/fa';
import classNames from 'classnames';
import Companies from '../Companies/Companies';
import Drip from './Drip/Drip';
import './Home.css';
import Footer from '../Footer/Footer';

import avatar from '../../assets/images/Me.JPG';
import Heartland from '../../assets/images/logos/hfpg.png';
import Splenda from '../../assets/images/logos/splenda.png';
import JavaHouse from '../../assets/images/logos/jh.png';
import RadioFlyer from '../../assets/images/logos/rf.png';
import AubryLane from '../../assets/images/logos/al.png';
import GoSplash from '../../assets/images/logos/gs.png';

var dripPageOffset = window.pageYOffset;

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
            dripOffset:100
        }
        this.toggleFlip = this.toggleFlip.bind(this);
        this.onScroll = this.onScroll.bind(this)
        // this.drip = this.drip.bind(this);
    }
    componentDidMount(){
        window.addEventListener('scroll', this.onScroll, false);

        // let dripInterval = setInterval(() => this.drip(this.state.dripOffset), 1);        
        // if (this.state.dripOffset >= 300){
        //     window.clearInterval(dripInterval)
        // }
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
            children[i].style.transition = 'all .3s';
        }

        cover.style.height = (window.pageYOffset)*0.8 + "px";

        // let lastScrollTop = 0;
        // let st = window.pageYOffset || document.documentElement.scrollTop;
        // if(st > lastScrollTop){
        //     console.log('up')
        // }else{
        //     console.log('down')
        // }
        // lastScrollTop = st <= 0 ? 0 : st;

        


        cover.style.transition = 'all .1s';
    
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
    // drip = (slip) => {
    //         console.log('drip: ' + this.state.dripOffset);
    //         let parent = document.getElementById('parallax-container');
    //         if(!parent){console.log('The element ' + parent + ' does not exist.');return;}
    //         let children = parent.getElementsByTagName('div');
    //         let cover = document.getElementById('cover');
    //         for(let i = 0; i < children.length; i++){
    //             children[i].style.transform = 'translateY(' + slip + 'px)';
    //         }
    //         cover.style.height = (slip) + "px";

    //         this.setState({
    //             dripOffset: slip + 1
    //         })
    // }
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
            <Link to={'/contact'}><button className={classes.ContactButton}>Say Hey! <FaComment/></button></Link>
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
                        <h4>Ben Cavenagh</h4>
                        <h1>Web Developer and Designer</h1>
                        <h3>Just the friendly tech guy</h3>
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
                        <div className={classNames(classes.AboutText)}>
                            <h3>Hey! I'm Ben Cavenagh. Nice to meet you!</h3>
                            <p>For those of you who don't know me, welcome! Let me tell you a little about myself... I am a recent graduate of Butler University (go dawgs) and am currently a UI/UX developer at Heartland Food Products Group, a company you might know as being the owner of the world famous brand, Splenda. I have been programming for the past 7+ years and have a wide variety of experiences under my belt ranging from large, international companies like Splenda and Radio Flyer, to smaller startups like Aubry Lane and Java House. Need a website? <span className={classes.boxE}><Link to={'/contact'} className={classes.customUnderline}>Send me a message.</Link></span> Have a cool idea? <span className={classes.boxE}><Link to={'/contact'} className={classes.customUnderline}>I'd love to hear it.</Link></span> Bored? <span className={classes.boxE}><Link to={'/contact'} className={classes.customUnderline}>Say hey!</Link></span></p>
                        </div>
                    </div>
                    <div className={classes.SplitTable}>
                        <div className={classNames(classes.Column, classes.ColumnSeparator)}>
                            <FaCode color='rgb(95, 211, 247)' size={45}/>
                            <h2>Front-End Development</h2>
                            <p>Throughout my years in development I have gained knowledge of an assortment of different languages and my heart has always been with front-end development.</p>
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
                                <li>MailChimp</li>
                                <li>Shopify</li>
                            </ul>
                        </div>
                        <div className={classes.Column}>
                            <FaPencilRuler color='rgb(95, 211, 247)' size={45}/>
                            <h2>Design</h2>
                            <p>I love to design creative, fun, and attractive digital artwork alongside my development as well.</p>
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
                                <li>Old Fashioned Pen &amp; Paper</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={classes.CollabContainer}>
                    <div className={classes.Collab}>
                        <div className={classes.Interested}>
                            <h3>Interested in working together?</h3>
                            <p>I'm always looking for something new to do. Send me a message and lets chat!</p>
                        </div>
                        <Link to={'/contact'}><button>Let's Chat!</button></Link>
                    </div>
                </div>
    
                <div className={classes.Companies}>
                     <h1>Who I've Worked For</h1>
                    <Companies companies={this.state.companies}/>
                </div>
                
            </div>
            <Footer/>
            </>
        );
    }
}            

export default Home; 