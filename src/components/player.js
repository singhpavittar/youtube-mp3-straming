import React, {Component} from 'react';
import '../index.css';
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
import axios from 'axios';

const PlayPauseControl = (props) => {
  if (props.play) {
    return (<img src={require("../images/ic_play_arrow_white_24px.svg")} alt="play_pause" onClick={props.playAudio} className="controls--play-button pull-right"/>);
  } else {
    return (<img src={require("../images/ic_pause_white_24px.svg")} alt="play_pause" onClick={props.pauseAudio} className="controls--play-button pull-right"/>);
  }
}

class playerCLS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openList: false,
      song: 'file:///Users/abcplusd/Desktop/reactJs/youtube-mp3-straming/src/components/AKay.mp3',
      play: true,
      volume: 1.0,
      url:`https://youtu.be/FOh5IXJdeCI`
    };
  }
  // componentDidMount() {
  //   axios.post(`http://localhost:3002/youtube?url=${url}`).then(data => {
  //     let song = new Buffer(data.data);
  //     this.setState({buffer: song});
  //     console.log(this.audio.currentSrc);
  //     console.log(data);
  //   });
  // }

  onPlay = () => {
    // console.log(this.audio.networkState);
    // console.log(this.audio.buffered);
    // console.log(this.audio.duration);
    // this.audio.currentTime = this.audio.duration;
    // console.log(this.audio.paused);
    // console.log(this.audio.ended);
    // console.log(this.audio.played);
    // this.audio.volume = 0.5;
    // this.audio.paused
    //   ? this.audio.play()
    //   : this.audio.pause();
    console.log(this.state.buffer);
  }

  playAudio = (props) => {
    this.audio.play();
    this.setState({
      play: !this.state.play
    });
  }

  pauseAudio = (props) => {
    this.audio.pause();
    this.setState({
      play: !this.state.play
    });
  }

  render() {
    return (
      <Grid className="mx-auto">
        <Row className="custom-music-player m0">
          <Col lg={12} sm={12} xs={12} md={12} className="p0">
            <Row className="m0">
              <Col className={this.props.coverImage
                ? 'transition-5s-out p0'
                : 'transition-5s-in p0'} lg={12} sm={12} xs={12} md={12}>
                {/* width-0 */}
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
                      <PlayPauseControl play={this.state.play} playAudio={this.playAudio} pauseAudio={this.pauseAudio}/>
                      <audio controls ref={(element) => this.audio = element} className="player display-none">
                        <source src={`http://localhost:3002/youtube?url=${this.state.url}`}/>
                      </audio>
                    </Col>
                    <Col className="p0 p3" lg={9} sm={9} xs={9} md={9}>
                      <h1 className="m0" onClick={this.onPlay}>Song Name</h1>
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
              openList: !this.state.openList
            })}>
              playlist
            </a>
            <Panel className="border-none bg-transparent col-centered w-80" collapsible expanded={this.state.openList}>
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
export default playerCLS;
