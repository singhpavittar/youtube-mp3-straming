import React, {Component} from 'react';
import '../index.css';
import {Grid} from 'react-bootstrap';

const Search = (props) => {
  return(
    <div className={props.search?'search open':'search'}>
      <input type="search" className="search-box" placeholder="Search"/>
      <span className="search-button" onClick={()=>props.onSearch()}>
        <span className="search-icon"></span>
      </span>
    </div>
  );
}

const SearchList = (props) => {
  return(
    <div style={{height:'400px'}}>

    </div>
  );
}

class searchVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false
    }
  }

  changeSearch = (props) => {
    this.setState({search:!this.state.search});
    // props.searchOpen(this.state.search);
    props.searchOpen(!this.state.search);
  }

  render() {
    return (
      <div className="transition-5s">
        <Search search={this.state.search} onSearch={()=>this.changeSearch(this.props)}/>
        <div className={this.state.search?'':'display-none'}>
          <SearchList/>
        </div>
      </div>
    );
  }
}

export default searchVideos;
