import React, { Component } from 'react';
// import classes from './Main.module.scss';
import Home from '../Home/Home';
import Winner from '../Winner/Winner';
import Contact from '../Contact/Contact';
import { Switch, Route } from 'react-router-dom'

class Main extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(
            <main>
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