import React, {Component} from 'react';
// import logo from './logo.svg';
import Player from './components/player.js'
import './App.css';
import {Grid, Row, Col} from 'react-bootstrap';


class App extends Component {
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
        <Row className="m0">
          <Col className="p0 col-centered" lg={6} sm={8} xs={8} md={8}>
            <Player/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
