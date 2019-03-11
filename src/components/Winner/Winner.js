import React, { Component } from 'react';
import classes from './Winner.module.scss';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { Snackbar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Loader from 'react-loader-spinner';

class Winner extends Component{
    constructor(props){
        super(props);
        this.state = {
            service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
            template_id: 'winner_template',
            user_id:process.env.REACT_APP_EMAIL_USER_ID,

            email:'',
            name:'',

            formSubmitted:false,
            finishedSend:false,

            emailInputClasses: classNames(classes.Input),
            nameInputClasses: classNames(classes.Input),

            snackbarOpen:false,
            errorMessage:null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
    handleChange = ( e ) => {
        this.setState({ [e.target.name]: e.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();

        //The parameters being sent in the email
        //The object props correspond to the email template in EmailJS
        let params = {
            email:this.state.email,
            name:this.state.name,
        }

        if(this.validEmail(params.email)){
            if(params.name !== null && params.name !== '') {
                this.sendFeedback(
                    this.state.template_id,
                    params,
                    this.state.user_id
                );
            }else{
                this.setState({
                    snackbarOpen: true,
                    nameInputClasses: classNames(classes.Input, classes.Invalid),
                    errorMessage: "Please enter your name!"
                })
            }
        }else{
            this.setState({
                snackbarOpen: true,
                emailInputClasses: classNames(classes.Input, classes.Invalid),
                errorMessage: "That's not a real email address."
            })
        }
    }
    validEmail = (email) => {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)){
            return (true)
        }else{
            this.setState({
                snackbarOpen: true,
                errorMessage: "You have entered an invalid email address!"
            })
            return (false)
        }
    }
    sendFeedback = (templateId, email_content, user_id) => {
        // console.log('uncomment sendFeedback in Contact.js to send emails again')
        this.setState({
            formSubmitted: true
        });
        window.emailjs
          .send(
                this.state.service_id, 
                templateId, 
                email_content, 
                user_id
                )
                .then(res => {
                    this.setState({
                        finishedSend: true
                    });
                })
          // Handle errors here however you like
          .catch(err => (this.setState({
                snackbarOpen: true,
                errorMessage: err
            }), err));
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ snackbarOpen: false });
    };
    render(){
        let inputContainerClasses = classNames(classes.WinnerForm);
        let loadingClasses = classNames(classes.Loader, classes.hidden);
        let submittedTestClasses = classNames(classes.ConfirmationText, classes.hidden);
        
        if(this.state.formSubmitted){
            loadingClasses = classNames(classes.Loader);
            inputContainerClasses = classNames(classes.WinnerForm, classes.hidden);
            submittedTestClasses = classNames(classes.ConfirmationText, classes.hidden);

        }
        if(this.state.finishedSend){
            loadingClasses = classNames(classes.Loader, classes.hidden);
            inputContainerClasses = classNames(classes.WinnerForm, classes.hidden);
            submittedTestClasses = classNames(classes.ConfirmationText);
        }
        return(
            <>
            <span className={classes.svg}>
                <svg xmlns="http://www.w3.org/2000/svg" id="firework-slide2" className={classNames(classes.firework_icon, classes.injected_svg, classes.img_firework, classes.inject_svg)} data-name="Calque 1" viewBox="0 0 157 156">
                    <title>icon_firework_1</title>
                    <path className={classes.cls_3} d="M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"></path>
                    <path className={classes.cls_3} d="M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"></path>
                    <path className={classes.cls_3} d="M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"></path>
                    <path className={classes.cls_3} d="M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"></path>
                    <path className={classes.cls_3} d="M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"></path>
                    <path className={classes.cls_3} d="M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"></path>
                    <path className={classes.cls_3} d="M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"></path>
                    <path className={classes.cls_3} d="M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"></path>
                    <path className={classes.cls_3} d="M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"></path>
                    <path className={classes.cls_3} d="M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"></path>
                    <path className={classes.cls_2} d="M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"></path>
                    <path className={classes.cls_2} d="M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"></path>
                    <path className={classes.cls_2} d="M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"></path>
                    <path className={classes.cls_2} d="M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"></path>
                    <path className={classes.cls_2} d="M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"></path>
                    <path className={classes.cls_2} d="M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"></path>
                    <path className={classes.cls_2} d="M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"></path>
                    <path className={classes.cls_2} d="M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"></path>
                    <path className={classes.cls_2} d="M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"></path>
                    <path className={classes.cls_2} d="M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"></path>}
                    <path className={classes.cls_1} d="M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"></path>
                    <path className={classes.cls_1} d="M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"></path>
                    <path className={classes.cls_1} d="M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"></path>
                    <path className={classes.cls_1} d="M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"></path>
                    <path className={classes.cls_1} d="M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"></path>
                    <path className={classes.cls_1} d="M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"></path>
                    <path className={classes.cls_1} d="M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"></path>
                    <path className={classes.cls_1} d="M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"></path>
                    <path className={classes.cls_1} d="M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"></path>
                    <path className={classes.cls_1} d="M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"></path>
                </svg>
            </span>
            <span className={classNames(classes.svg, classes.svg2)}>
                <svg xmlns="http://www.w3.org/2000/svg" id="firework-slide2" className={classNames(classes.firework_icon, classes.injected_svg, classes.img_firework, classes.inject_svg)} data-name="Calque 1" viewBox="0 0 157 156">
                    <title>icon_firework_1</title>
                    <path className={classes.cls_3} d="M80.52,106.92a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,106.92Z"></path>
                    <path className={classes.cls_3} d="M97.72,100.91a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,97.72,100.91Z"></path>
                    <path className={classes.cls_3} d="M108.32,85.95a0.61,0.61,0,0,1-.19,0l-9.55-3A0.65,0.65,0,1,1,99,81.69l9.55,3A0.65,0.65,0,0,1,108.32,85.95Z"></path>
                    <path className={classes.cls_3} d="M98.77,71a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24L99,71A0.66,0.66,0,0,1,98.77,71Z"></path>
                    <path className={classes.cls_3} d="M91.7,61a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,91.7,61Z"></path>
                    <path className={classes.cls_3} d="M80.52,57a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,57Z"></path>
                    <path className={classes.cls_3} d="M67.64,61a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,67.64,61Z"></path>
                    <path className={classes.cls_3} d="M60.57,71a0.66,0.66,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,60.57,71Z"></path>
                    <path className={classes.cls_3} d="M51,85.95a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,51,85.95Z"></path>
                    <path className={classes.cls_3} d="M61.62,100.91a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,61.62,100.91Z"></path>
                    <path className={classes.cls_2} d="M80.52,126.88a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,126.88Z"></path>
                    <path className={classes.cls_2} d="M109.74,116.86a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,109.74,116.86Z"></path>
                    <path className={classes.cls_2} d="M127.42,91.92a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,127.42,91.92Z"></path>
                    <path className={classes.cls_2} d="M117.86,65a0.65,0.65,0,0,1-.2-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.66,0.66,0,0,1,117.86,65Z"></path>
                    <path className={classes.cls_2} d="M103.73,45.08a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,103.73,45.08Z"></path>
                    <path className={classes.cls_2} d="M80.52,37.07a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,37.07Z"></path>
                    <path className={classes.cls_2} d="M55.61,45.08a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,55.61,45.08Z"></path>
                    <path className={classes.cls_2} d="M41.47,65a0.62,0.62,0,0,1-.2,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,41.47,65Z"></path>
                    <path className={classes.cls_2} d="M31.92,91.93a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,31.92,91.93Z"></path>
                    <path className={classes.cls_2} d="M49.59,116.86a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,49.59,116.86Z"></path>}
                    <path className={classes.cls_1} d="M80.52,146.83a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,146.83Z"></path>
                    <path className={classes.cls_1} d="M121.77,132.82a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,121.77,132.82Z"></path>
                    <path className={classes.cls_1} d="M146.52,97.9a0.61,0.61,0,0,1-.19,0l-9.55-3a0.65,0.65,0,1,1,.39-1.24l9.55,3A0.65,0.65,0,0,1,146.52,97.9Z"></path>
                    <path className={classes.cls_1} d="M137,59a0.65,0.65,0,0,1-.2-1.27l9.55-3A0.65,0.65,0,1,1,146.7,56l-9.55,3A0.66,0.66,0,0,1,137,59Z"></path>
                    <path className={classes.cls_1} d="M115.76,29.12a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,1,.78l-6,8A0.65,0.65,0,0,1,115.76,29.12Z"></path>
                    <path className={classes.cls_1} d="M80.52,17.11a0.65,0.65,0,0,1-.65-0.65v-10a0.65,0.65,0,0,1,1.3,0v10A0.65,0.65,0,0,1,80.52,17.11Z"></path>
                    <path className={classes.cls_1} d="M22.37,59a0.62,0.62,0,0,1-.2,0l-9.55-3A0.65,0.65,0,1,1,13,54.77l9.55,3A0.65,0.65,0,0,1,22.37,59Z"></path>
                    <path className={classes.cls_1} d="M12.82,97.9a0.65,0.65,0,0,1-.19-1.27l9.55-3a0.65,0.65,0,1,1,.39,1.24l-9.55,3A0.61,0.61,0,0,1,12.82,97.9Z"></path>
                    <path className={classes.cls_1} d="M43.58,29.12a0.65,0.65,0,0,1-.52-0.26l-6-8a0.65,0.65,0,0,1,1-.78l6,8A0.65,0.65,0,0,1,43.58,29.12Z"></path>
                    <path className={classes.cls_1} d="M37.56,132.82a0.65,0.65,0,0,1-.52-1l6-8a0.65,0.65,0,0,1,.91-0.13,0.65,0.65,0,0,1,.13.91l-6,8A0.65,0.65,0,0,1,37.56,132.82Z"></path>
                </svg>
            </span>
            <div className={classes.Winner}>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.snackbarOpen}
                    autoHideDuration={3000}
                    onClose={this.handleClose}
                    ContentProps={{
                        'aria-describedby': 'message-id',
                    }}
                    message={<span id="message-id">{this.state.errorMessage}</span>}
                    action={[
                        <IconButton
                            key="close"
                            aria-label="Close"
                            color="inherit"
                            className={classes.close}
                            onClick={this.handleClose}
                        >
                            <CloseIcon />
                        </IconButton>,
                    ]}
                />
                <div className={classes.WinnerText}>
                    <h3>Congratulations!</h3>
                    <p>You've found the secret page!<br/>
                    Enter your name and email here and I will email you back to explain the prize!</p>
                    <div className={inputContainerClasses}>
                        <div id="email" className={classes.FormInput}>
                            <input 
                                type='email' 
                                placeholder="name@email.com" 
                                name='email' 
                                id='email'
                                autoComplete="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                                className={this.state.emailInputClasses}></input>
                        </div>
                        <div id="name" className={classes.FormInput}>
                            <input 
                                type='text' 
                                placeholder="What's your name?" 
                                name='name' 
                                id='name'
                                value={this.state.name}
                                onChange={this.handleChange}
                                className={this.state.nameInputClasses}></input>
                        </div>
                        <div className={classes.Submit} onClick={this.handleSubmit}>
                            <h4>Send</h4>
                            <FaAngleRight/>
                        </div>
                    </div>
                    <div className={loadingClasses}>
                        <Loader 
                            type="Rings"
                            color="rgb(2,192,238"
                            height="100"	
                            width="100"
                        /> 
                    </div>
                    <p className={submittedTestClasses}>Thanks for playing! I'll add your name to the winner list ASAP!</p>
                </div>
            </div>
            <Link to={'/'}><div className={classes.ReturnButton}>Return to Site</div></Link>
            </>
        );
    }
}
export default Winner; 