import React, {Component} from 'react';
// import logo from './logo.svg';
import Player from './components/player.js'
import Search from './components/search.js'
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      flip :false,
      coverImg:false
    }
  }

  flipDone(value) {
    this.setState({flip: value});
  }

  searchOpen = (value) => {
    this.setState({coverImg: value});
  }

  render() {
    return (
      // <div className="clearfix">
      //   {/* <div className="mx-auto"> */}
      //   <div className="sm-col-8 md-col-8 lg-col-8 mx-auto">
      //   <Player/>
      //   </div>
      //   {/* </div> */}
      // </div>
      <Grid className="clearfix">
        <Row>
          <Button ref='button' onClick={() => this.flipDone(!this.state.flip)}>
            flip</Button>
        </Row>
        <Row className="m0">
          <Col className="p0 col-centered" lg={6} sm={8} xs={8} md={8}>
            <Search searchOpen={this.searchOpen}/>
          </Col>
          <Col className="p0 col-centered custom-container" lg={6} sm={8} xs={8} md={8}>
            <div className={this.state.flip
              ? 'p0 col-centered card flipped'
              : 'p0 col-centered card'}>
              <div className="front">
                <Player coverImage={this.state.coverImg}/>
              </div>
              <div className="back">
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
