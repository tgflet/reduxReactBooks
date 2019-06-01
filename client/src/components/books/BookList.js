import React, {Component} from 'react'
import {connect} from 'react-redux';
import {fetchBooks} from '../../actions';

class BookList extends Component{
    componentDidMount() {
        this.props.fetchBooks();
    }
    renderList(){
        return this.props.books.map(book =>{
            return(
                <div className = 'ui item' key = {book.id}>
                <div className = 'content'>
                <p className="header">{book.Title}</p>
                </div>
                </div>
            )
        })
    }
    render(){
        console.log(this.props.books)
        return(
            // <span>Books</span>
            
            <div className="ui celled list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        books: Object.values(state.books)
    };
}
export default connect(mapStateToProps, {fetchBooks})(BookList);