import React from 'react';
import classes from './Companies.module.scss';

const companies = (props) => {
    return(
        <div className={classes.Companies}>
        {props.companies.map((company, index) => 
            <div className={classes.Logo} key={index}>
                {/* <p>{company.name}</p> */}
                <img src={company.logoSrc}  alt={company.name}/>
            </div>
        )}
        </div>
    );
};

export default companies; 