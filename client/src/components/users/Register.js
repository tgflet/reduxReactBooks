import React, {Component} from 'react';
import Modal from '../Modal';
import {createUser} from '../../actions';
import {connect} from 'react-redux'
import UserForm from '../forms/UserForm';
import history from '../../utils/history';

class Register extends Component{

    onSubmit=(formValues)=>{
        this.props.createUser(formValues)

    }
    renderForm(){
        return(
            <UserForm onSubmit = {this.onSubmit} register
            />
        )
    }
    renderActions(){
        return null
    }
    render(){
        return(
            <Modal
            onDismiss={()=>history.goBack()}
            title="Sign In"
            content={this.renderForm()}
            actions={this.renderActions()}
            />
        )
    }
    
}
export default connect(null, {createUser})(Register)