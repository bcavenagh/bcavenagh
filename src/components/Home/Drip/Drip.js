import React from 'react';
import classes from './Drip.module.scss';
import classNames from 'classnames';

const drip = (props) => {
    let className = '';
    switch (props.color){
        case 'Blue':
            className = classNames(classes.Image, classes.Blue);
            break;
        case 'Pink':
            className = classNames(classes.Image, classes.Pink);
            break;
        case 'Yellow':
            className = classNames(classes.Image, classes.Yellow);
            break;
        case 'Black':
            className = classNames(classes.Image, classes.Black);
            break;
        default:
            className = classNames(classes.Image, classes.Blue);
            break;
    }
    
    return(
        <div className={className} data-speed={props.speed}></div>
    );
};

export default drip; 