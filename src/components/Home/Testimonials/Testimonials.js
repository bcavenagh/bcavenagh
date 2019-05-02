import React from 'react';
import classes from './Testimonials.module.scss';
import Testimonial from './Testimonial/Testimonial';

const testimonials = (props) => {
    return(
        <div className={classes.TestimonialsContainer}>
            <hr className={classes.ruler}/>
            <h1>Testimonials</h1>
            <div className={classes.Testimonials}>
                {props.testimonials.map((testimonial, index) => 
                    <div key={index}>
                        <Testimonial 
                            image={testimonial.image}
                            name={testimonial.name} 
                            message={testimonial.message} 
                            company={testimonial.company}
                            position={testimonial.position}
                            />
                    </div>
                )}
            </div>
        </div>
    );
};

export default testimonials; 