import React, {Component} from 'react';
import {Field, reduxForm } from 'redux-form';

class UserForm extends Component{

}
export default reduxForm({
    form: 'userForm',
    validate
})(UserForm);