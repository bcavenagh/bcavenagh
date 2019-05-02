import React from 'react';
import classes from './Testimonial.module.scss';
import image from '../../../../assets/images/Me.JPG';

const testimonial = (props) => {
    return(
        <div className={classes.Testimonial}>
            <div className={classes.Person}>
                <img className={classes.Image} src={props.image}/>
                <p className={classes.Name}>{props.name}</p>
                <p className={classes.Position}>{props.position}</p>
                <p className={classes.Company}>{props.company}</p>
            </div>
            <p className={classes.Message}>{props.message}</p>
        </div>
    );
};

export default testimonial; 