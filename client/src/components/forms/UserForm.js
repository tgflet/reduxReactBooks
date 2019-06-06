import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';
import history from '../../utils/history'

class UserForm extends Component{
    onSubmit = (formValues)=>{
        this.props.onSubmit(formValues);
    }
    renderError({error, touched}){
        if (touched && error){
            return(
                <div className='ui error message'>{error}</div>
            );
        }
    }
    renderInput=({input, label, meta})=>{
        return(
            <div className='field'>
                <label>{label}</label>
                {this.renderError(meta)}
                <input {...input} autoComplete='off'/>
            </div>
        )
    }
    renderPasswordInput=({input, label, meta})=>{
        return(
            <div className='field'>
                <label>{label}</label>
                {this.renderError(meta)}
                <input {...input} type='password' autoComplete='off'/>
            </div>
        )
    }
    renderRegistration(){
        if(this.props.register){
            return(
                <React.Fragment>
                    <Field name='email' component={this.renderInput} label = 'Enter Email Address'/>
                    <Field name='password' component={this.renderPasswordInput} label = 'Enter Password'/>
                    <Field name='confirm' component={this.renderPasswordInput} label = 'Confirm Password'/>
                </React.Fragment>
            )
        }
    
    }
    renderActions(){
        if(this.props.register){
            return(
                <React.Fragment>
                    <button className='ui button green'>Register</button>
                    <button className='ui button' onClick={()=>history.goBack()}>Cancel</button>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                    <button className='ui button yellow'>Update</button>
                    <button className='ui button' onClick={()=>history.goBack()}>Cancel</button>
                </React.Fragment>
            )
        }
    }

    
    render(){
        return(
            <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Field name='firstName' component={this.renderInput} label="Enter First Name"/>
                <Field name='lastName' component={this.renderInput} label="Enter Last Name"/>
                <Field name='userName' component={this.renderInput} label="Enter User Name"/>
                {this.renderRegistration()}
                {this.renderActions()}
            </form>
        )
    }
}
const validate = (formValues) =>{
    const errors = {};
    if(!formValues.firstName){
        errors.firstName = 'You Must Enter a First Name'
    }else if(formValues.firstName.length<2){
        errors.firstName = 'Minimum Name Length of Two Characters'
    }
    if(!formValues.lastName){
        errors.lastName = 'You Must Enter a Last Name'
    }else if(formValues.lastName.length<2){
        errors.lastName = 'Minimum Name Length of Two Characters'
    }
    if(!formValues.userName){
        errors.userName = 'You Must Enter a User Name'
    }else if(formValues.userName.length<2){
        errors.userName = 'Minimum Name Length of Two Characters'
    }
    // if(this.props.register=='true'){
        if(!formValues.email){
            errors.email = 'You Must Enter an Email'
        if(!formValues.password){
            errors.password = 'You Must Enter a Password'
        }else if(formValues.password.length<8){
            errors.password = 'Password Must be at Least Eight Characters Long'
        }
        if(!formValues.confirm){
            errors.confirm= 'You Must Confirm Password'
        }else if(formValues.confirm!==formValues.password){
            errors.confirm= "Passwords Do Not Match"
        }
        // }
    }
    return errors;
    
};
export default reduxForm({
    form: 'userForm',
    validate
})(UserForm)