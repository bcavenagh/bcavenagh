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
    render(){
        return(
            <main style={{
                display:'flex',
                flexWrap:'wrap',
                justifyContent:'center',
                alignItems:'center',
                height:'100vh',
                width:'100vw'
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