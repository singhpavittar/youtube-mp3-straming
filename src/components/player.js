import React, {Component} from 'react';
import '../styles/index.css';
import {
  Grid,
  Row,
  Col,
  ProgressBar,
  Accordion,
  Panel,
  Button,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';
//
// let Audio = (props) => {
//   return (
//
//   );
// };

class playercls extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      song: 'file:///Users/abcplusd/Desktop/reactJs/youtube-mp3-straming/src/components/AKay.mp3'
    };
  }
  componentDidMount() {
    // fetch()
  }
  render() {
    return (
      <Grid className="m-5-auto">
        <Row className="custom-music-player m0">
          <Col lg={12} sm={12} xs={12} md={12} className="p0">
            <Row className="m0">
              <Col className="p0" lg={12} sm={12} xs={12} md={12}>
                <img className="img-responsive cover-img" src={require("../images/cover.jpg")} alt="cover image"/>
              </Col>
              <Col className="p0" lg={12} sm={12} xs={12} md={12}>
                <Row className="m0">
                  <Col className="p0" lg={12} sm={12} xs={12} md={12}>
                    <ProgressBar className="m0" bsStyle="danger" now={80}/>
                  </Col>
                </Row>
                <Row className="m0">
                  <Col className="p0" lg={8} sm={8} xs={8} md={8}>
                    <Col className="p0 p3" lg={3} sm={3} xs={3} md={3}>
                      <img src={require("../images/ic_play_arrow_white_24px.svg")} alt="play_pause" className="controls--play-button pull-right"/>
                      <audio controls className="player">
                        <source src={require('./AKay.mp3')}/>
                      </audio>
                    </Col>
                    <Col className="p0 p3" lg={9} sm={9} xs={9} md={9}>
                      <h1 className="m0">Song Name</h1>
                      <p className="m0">song description</p>
                    </Col>
                  </Col>
                  <Col className="p0 p3" lg={4} sm={4} xs={4} md={4}>
                    <Col className="p0" lg={4} sm={4} xs={4} md={4}>
                      <img src={require("../images/ic_fast_rewind_black_24px.svg")} height="40" alt="back" className="actions--back"/>
                    </Col>
                    <Col className="p0" lg={4} sm={4} xs={4} md={4}>
                      <img src={require("../images/ic_fast_forward_black_24px.svg")} height="40" alt="next" className="actions--forward"/>
                    </Col>
                    <Col className="p0 p2" lg={4} sm={4} xs={4} md={4}>
                      <img src={require("../images/ic_repeat_black_24px.svg")} alt="repeat" className="actions--repeat"/>
                    </Col>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col lg={12} sm={12} xs={12} md={12} className="p0 text-center">
            <a className="text-decoration-none text-white pointer text-uppercase text-bold" onClick={() => this.setState({
              open: !this.state.open
            })}>
              playlist
            </a>
            <Panel className="border-none bg-transparent col-centered w-80" collapsible expanded={this.state.open}>
              <ListGroup fill className="p2">
                <ListGroupItem>Item 1</ListGroupItem>
                <ListGroupItem>Item 2</ListGroupItem>
                <ListGroupItem>&hellip;</ListGroupItem>
              </ListGroup>
            </Panel>
          </Col>
        </Row>
      </Grid>
    );
  }
}

// Player
// playercls
export default playercls;
