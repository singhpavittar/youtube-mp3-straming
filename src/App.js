import React, {Component} from 'react';
// import logo from './logo.svg';
import Player from './components/player.js'
import Search from './components/search.js'
import './App.css';
import {Grid, Row, Col, Button} from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    this.state.flip = false
    // this.flipDone = this.flipDone.bind(this)
  }
  //
  // componentDidMount() {
  //   const elm = this.refs.button;
  //   console.log(elm);
  //   // elm.addEventListener('animationend', this.flipDone);
  // }
  //
  // componentWillUnmount () {
  //   const elm = this.refs.button;
  //   // elm.removeEventListener('animationend', this.flipDone);
  // }

  flipDone(value) {
    console.log(value);
    this.setState({flip: value})
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
          <Col className="p0 col-centered custom-container" lg={6} sm={8} xs={8} md={8}>
            <div className={this.state.flip
              ? 'p0 col-centered card flipped'
              : 'p0 col-centered card'}>
              <div className="front">
                <Player/>
              </div>
              <div className="back">
                <Search/>
              </div>
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
