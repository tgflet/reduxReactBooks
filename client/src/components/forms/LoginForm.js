import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';

class LoginForm extends Component{
    renderError({error, touched}){
        if(touched && error){
            return(
                <div className='ui error message'>{error}</div>
            )
        }
    }
    renderInput = ({input, label, meta})=>{
        return(
            <div className='field'>
                <label>{label}</label>
                {this.renderError(meta)}
                <input {...input} autoComplete='off'/>
            </div>
        );
    }
    renderPasswordInput = ({input, label, meta})=>{
        return(
            <div className='field'>
                <label>{label}</label>
                {this.renderError(meta)}
                <input {...input} type="password" autoComplete='off'/>
            </div>
        );
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues);
    }
    render(){
        return(
            <form className='ui form error' onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='email' component={this.renderInput} label="Enter Email" type="email"/>
                <Field name='password' component={this.renderPasswordInput} label="Enter Password" type="password"/>
                <button className='ui button primary'>Log In</button>
            </form>
        )
    }
}
const validate = (formValues)=>{
    const errors ={};
    if(!formValues.email){
        errors.email = 'You must enter an email';
    }
    if(!formValues.password){
        errors.password='You must enter a password'
    }
    return errors;
};
export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);