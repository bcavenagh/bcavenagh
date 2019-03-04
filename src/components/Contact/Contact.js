import React, { Component } from 'react';
import classes from './Contact.module.scss';
import emailjs from 'emailjs-com';
import classNames from 'classnames';
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

            formSubmitted:false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange( e ){
        this.setState({ [e.target.name]: e.target.value});
    }

    handleSubmit(event) {
        event.preventDefault();
        let params = {
            email:this.state.form_email,
            name:this.state.form_name,
            message:this.state.form_message
        }

        this.sendFeedback(
          this.state.template_id,
          params,
          this.state.user_id
        );
    
        this.setState({
          formSubmitted: true
        });
    }

    sendFeedback(templateId, email_content, user_id) {
        window.emailjs
          .send(
                this.state.service_id, 
                templateId, 
                email_content, 
                user_id
                )
          .then(res => {
            this.setState({
              formEmailSent: true
            });
          })
          // Handle errors here however you like
          .catch(err => console.error('Failed to send feedback. Error: ', err));
    }
    render(){
        return(
            <>
                <div>Shoot me a message and let's chat!</div>
                <form className={classes.ContactForm} onSubmit={e => e.preventDefault()}>
                    <input 
                        type='email' 
                        placeholder='Email' 
                        name='form_email' 
                        autoComplete="email"
                        onChange={this.handleChange}
                        className={classNames(classes.Input)}></input>
                    <input 
                        type='text' 
                        placeholder='Name' 
                        name='form_name' 
                        onChange={this.handleChange}
                        className={classNames(classes.Input)}></input>
                    <textarea 
                        type='text' 
                        placeholder='Message' 
                        name='form_message' 
                        autoComplete="username"
                        onChange={this.handleChange}
                        className={classNames(classes.Input, classes.LargeInput)}></textarea>
                </form>
                {/* <div onClick={this.handleSubmit}>Click Here</div> */}
            </>
        );
    }
}
export default Contact; 