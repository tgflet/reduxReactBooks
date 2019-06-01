import React, {Component} from 'react';
import {connect} from 'react-redux';
import { currentUser} from '../actions';
import history from '../utils/history';

class NavButton extends Component{
    componentDidMount(){
      this.getUser()
    }
    getUser = () =>{
      if(localStorage.getItem('accessToken')){
        const token = {headers: {"x-access-token": localStorage.getItem('accessToken')}}
        console.log(token)
        this.props.currentUser(token)
      }
      else{
        console.log("nada")
      }
      
    }
    renderUserButton(){
       if(!this.props.isSignedIn){
           return(
               <button onClick ={()=>history.push('/login')} className="ui red button">
                Sign In
               </button>
           );
       }else{
           return(
               <button onClick={()=>history.push('/user')} className="ui green button">
               {this.props.username}
               </button>
           ) 
       }
   }
   render (){
       return(
        <React.Fragment>
            {this.renderUserButton()}
        </React.Fragment> 
       );
   } 
}
const mapStateToProps = (state) =>{
    return{
        isSignedIn: state.auth.active,
        userId: state.auth.id,
        username: state.auth.username
    }
}

export default connect(mapStateToProps, {currentUser})(NavButton);