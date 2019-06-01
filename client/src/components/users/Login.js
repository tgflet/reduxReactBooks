import React, {Component} from 'react';
import Modal from '../Modal';
import {signIn} from '../../actions';
import {connect} from 'react-redux'
import LoginForm from '../forms/LoginForm';
import history from '../../utils/history';

class Login extends Component{
    onSubmit=(formValues)=>{
        this.props.signIn(formValues)

    }
    renderForm(){
        return(
            <LoginForm onSubmit = {this.onSubmit}
            />
        )
    }
    renderActions(){
        return(
            <React.Fragment>
                <button onClick={()=>history.push('/register')} className="ui button yellow">
                New User
                </button>
            </React.Fragment>
        )
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
export default connect(null, {signIn})(Login)