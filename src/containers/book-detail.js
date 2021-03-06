import React ,{ Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render(){
    if(!this.props.book){
        return (<div>Select a book</div>);
    }
    return (
      <div>
        <div>Book Deatil {this.props.book.title}</div>
        <div>Pahges Nbr : {this.props.book.pages}</div>
      </div>

    );
  }
}

function mapStateToProps(state){
  return {
    book: state.activeBook
  }
}

export default connect(mapStateToProps)(BookDetail);
