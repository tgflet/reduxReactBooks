import React, {Component} from 'react';
import {updateUser, fetchUser, currentUser} from '../../actions';
import {connect} from 'react-redux'
import UserForm from '../forms/UserForm';
import _ from 'lodash';
import history from '../../utils/history'

class UpdateUser extends Component{
    componentDidMount(){
        if(localStorage.getItem('accessToken')){
            this.props.fetchUser(this.props.match.params.id)
            
        }else{
            history.push('/');
        }
        
    }
    onSubmit=(formValues)=>{
        
        this.props.updateUser(this.props.user.id, formValues).then(()=>{
            let id = this.props.user.id;
            const token = {headers: {"x-access-token": localStorage.getItem('accessToken')}}
            this.props.currentUser(token);
            history.push(`/profile/${id}`)
        })
        
        
        
        
        // console.log(token)
        // this.props.currentUser(token)
    }
    render(){
        if(!this.props.user){
            return <div>Loading..</div>
        }
        return(
            <div>
                <h3>Edit Your Profile</h3>
                <UserForm
                    initialValues={_.pick(this.props.user, 'firstName', 'lastName', 'userName')}
                    onSubmit={this.onSubmit}/>
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        auth: state.auth.id, 
        user: state.users
    };
}
export default connect(mapStateToProps, {updateUser, fetchUser, currentUser})(UpdateUser)