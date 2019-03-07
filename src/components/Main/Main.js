import React, { Component } from 'react';
// import classes from './Main.module.scss';
import Home from '../Home/Home';
import Winner from '../Winner/Winner';
import Contact from '../Contact/Contact';
import { Switch, Route } from 'react-router-dom'
import { FaFileExcel } from 'react-icons/fa';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
        // We listen to the resize event
        // window.addEventListener('resize', () => {
        //     // We execute the same script as before
        //     let vh = window.innerHeight * 0.01;
        //     document.documentElement.style.setProperty('--vh', `${vh}px`);
        // });
    }
    render(){
        return(
            <main style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                // minHeight:'97vh',
                // minWidth:'99vw',
                height: '100vh', /* Fallback for browsers that do not support Custom Properties */
                // height: 'calc(var(--vh, 1vh) * 100)'
            }}>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/winner' component={Winner}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
            </main>
        );
    }
}
export default Main; 