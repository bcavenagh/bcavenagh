import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import classes from './Contact.module.scss';
import emailjs from 'emailjs-com';
import classNames from 'classnames';
import { Snackbar, Button, IconButton } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import Hoopla from '../../assets/images/Hoopla.png';

class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            service_id: process.env.REACT_APP_EMAIL_SERVICE_ID,
            template_id: process.env.REACT_APP_EMAIL_TEMPLATE_ID,
            user_id:process.env.REACT_APP_EMAIL_USER_ID,

            form_email:'',
            form_name:'',
            form_message:'',

            formSubmitted:false,

            emailInputClasses: classNames(classes.FormInput),
            nameInputClasses: classNames(classes.FormInput),
            messageInputClasses: classNames(classes.FormInput),

            snackbarOpen:false,
            errorMessage:null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    // componentDidMount(){
    //     window.addEventListener('touchstart', function() {
    //         console.log('touch');
    //         this.setState({
    //             snackbarOpen: true,
    //             messageInputClasses: classNames(classes.FormInput, classes.focused, classes.invalid),
    //             errorMessage: "Please enter a message."
    //         })
    //     });
    // }

    handleChange = ( e ) => {
        this.setState({ [e.target.name]: e.target.value});
        
        //check which input is being changed
        switch(e.target.name){
            case 'form_email':
                //check if it is filled or not
                e.target.value !== '' ? 
                    //set focused class if filled
                    this.setState({ emailInputClasses: classNames(classes.FormInput, classes.focused)}) : 
                    //remove focused class if unfilled
                    this.setState({ emailInputClasses: classNames(classes.FormInput)});
                break;

            case 'form_name':
                e.target.value !== '' ? 
                    this.setState({ nameInputClasses: classNames(classes.FormInput, classes.focused)}) : 
                    this.setState({ nameInputClasses: classNames(classes.FormInput)});
                break;
            
            case 'form_message':
                e.target.value !== '' ? 
                    this.setState({ messageInputClasses: classNames(classes.FormInput, classes.focused)}) : 
                    this.setState({ messageInputClasses: classNames(classes.FormInput)});
                break;

            default: 
                break;
        }
    }

    handleSubmit(event) {
        event.preventDefault();

        //The parameters being sent in the email
        //The object props correspond to the email template in EmailJS
        let params = {
            email:this.state.form_email,
            name:this.state.form_name,
            message:this.state.form_message
        }

        if(this.validEmail(params.email)){
            if(params.message !== null && params.message !== '') {
                this.sendFeedback(
                    this.state.template_id,
                    params,
                    this.state.user_id
                );
            }else{
                this.setState({
                    snackbarOpen: true,
                    messageInputClasses: classNames(classes.FormInput, classes.focused, classes.invalid),
                    errorMessage: "Please enter a message."
                })
            }
        }else{
            this.setState({
                snackbarOpen: true,
                emailInputClasses: classNames(classes.FormInput, classes.focused, classes.invalid),
                errorMessage: "That's not a real email address."
            })
        }

        this.setState({
          formSubmitted: true
        });
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
    sendFeedback(templateId, email_content, user_id) {
        console.log('uncomment sendFeedback in Contact.js to send emails again')
        // window.emailjs
        //   .send(
        //         this.state.service_id, 
        //         templateId, 
        //         email_content, 
        //         user_id
        //         )
        //   .then(res => {
        //     this.setState({
        //       formEmailSent: true
        //     });
        //   })
        //   // Handle errors here however you like
        //   .catch(err => console.error('Failed to send message. Error: ', err));
    }
    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }
    
        this.setState({ snackbarOpen: false });
    };
    setFocus = (el) => {
        let field = document.getElementById(el);
        field.focus();
        console.log('focusing');
    }
    render(){
        return(
            <div className={classes.ContactPage}>
                <div className={classes.Stripe}></div>
                <div className={classes.ContactGrid}>
                    <Link to={'/'}><button className={classes.BackButton}><FaAngleLeft/>Back</button></Link>
                    <div className={classes.ContactContent}>
                        <form name="contact_form" className={classes.ContactForm}>
                        <h1>Say Hey!</h1>
                            <Snackbar
                                anchorOrigin={{
                                    vertical: 'top',
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
        
                            {/* <h4 className={classes.Text}>Shoot me a message and let's chat!</h4> */}
                            <div id="email" className={this.state.emailInputClasses} onClick={() => this.setFocus('form_email')}>
                                <label htmlFor='form_email' className={classes.FormLabel}>Email</label>
                                <input 
                                    type='email' 
                                    placeholder="name@email.com" 
                                    name='form_email' 
                                    id='form_email'
                                    autoComplete="email"
                                    value={this.state.form_email}
                                    onChange={this.handleChange}
                                    className={classNames(classes.Input)}></input>
                            </div>             
                            <div id="name" className={this.state.nameInputClasses} onClick={() => this.setFocus('form_name')}>
                                <label htmlFor='form_name' className={classes.FormLabel}>Name</label>
                                <input 
                                    type='text' 
                                    placeholder='Who are you?' 
                                    name='form_name' 
                                    id='form_name'
                                    onChange={this.handleChange}
                                    className={classNames(classes.Input)}></input>
                            </div>
                            <div className={this.state.messageInputClasses} onClick={() => this.setFocus('form_message')}>
                                <label htmlFor='form_message' className={classes.FormLabel}>Message</label>
                                <textarea 
                                    rows="1"
                                    type='text' 
                                    placeholder="What's up?" 
                                    name='form_message' 
                                    id="form_message"
                                    onChange={this.handleChange}
                                    className={classNames(classes.Input, classes.LargeInput)}></textarea>
                            </div>
                            
                            <div className={classes.Submit} onClick={this.handleSubmit}>
                                <h4>Send</h4>
                                <FaAngleRight/>
                            </div>
                            <div className={classes.Hoopla}><img src={Hoopla}/></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Contact; 