import React, {Component} from 'react';
import '../index.css';
import {Grid, Table} from 'react-bootstrap';
import axios from 'axios';

const Search = (props) => {
  return (
    <form onSubmit={props.searchVideos}>
      <div className={props.search
        ? 'search open'
        : 'search'}>
        <input type="search" className="search-box" placeholder="Search" onChange={(e) => props.searchText(e.target.value)} required/>
        <span className="search-button" onClick={() => props.onSearch()}>
          <span className="search-icon"></span>
        </span>
      </div>
    </form>
  );
}

const ListItem = (props) => {
  return (
    <tr className="bg-black-transparent text-white">
      <td className="text-center">
        <img src={props.list.thumbnails.medium.url} alt={props.list.title} height="70"/>
      </td>
      <td>
        <a href>
          {props.list.title}
        </a>
        <p className="text-bold">{props.list.channelTitle}</p>
      </td>
      {/* <td>{props.list.publishedAt}</td> */}
      <td className="vertical-align-middle"><img src={require('../images/ic_add_circle_outline_white_48px.svg')} alt="add to playlist"/></td>
    </tr>
  );
}

const SearchList = (props) => {
  return (
    <Table responsive className="m0">
      <tbody>
        {props.list.map((listitem, index) => <ListItem key={index} list={listitem}/>)}
        {/* <tr>
          <td>2</td>
          <td>Table cell</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Table cell</td>
        </tr> */}
      </tbody>
    </Table>
  );
}

class searchVideos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: false,
      searchText: '',
      searchList: []
    }
  }

  getSearchText = (e) => {
    this.setState({searchText: e});
  }

  setSearchList = (data) => {
    this.setState({searchList: data});
  }

  youtubeSearch = (event) => {
    event.preventDefault();
    if (!this.state.searchText) {
      return false;
    }
    let url = this.state.searchText;
    axios.get(`http://localhost:3002/youtube/search/${url}`).then(data => this.setSearchList(data.data), err => console.log(err));
  }

  changeSearch = (props) => {
    this.setState({
      search: !this.state.search
    });
    // props.searchOpen(this.state.search);
    props.searchOpen(!this.state.search);
  }

  render() {
    return (
      <div>
        <Search searchText={this.getSearchText} searchVideos={this.youtubeSearch} search={this.state.search} onSearch={() => this.changeSearch(this.props)}/>
        <div className={this.state.search
          ? 'transition-5s-in overflow-auto'
          : 'transition-5s-out'}>
          <SearchList list={this.state.searchList}/>
        </div>
      </div>
    );
  }
}

export default searchVideos;
