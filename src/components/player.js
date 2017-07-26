import React from 'react';
import '../styles/index.css'

let Player = () => {
  return (
    <section className="music-player">
      <header className="music-player--banner"></header>
      <main className="music-player--main">
        <div className="music-player--progress">
          <progress className="progress--progress-bar" value="43" max="100"></progress>
          <div className="progress--time">1:37</div>
          <div className="progress--time progress--time__end">3:52</div>
        </div>
        <div className="music-player--controls">
          {/* <span className="glyphicon glyphicon-pause" aria-hidden="true"></span> */}
          {/* <i className="fa fa-pause controls--play-button"></i> */}
          <img src={require("../images/ic_play_arrow_white_24px.svg")} alt="play_pause" className="controls--play-button"/>

          <div className="song-info">
            <div className="song-info--title">Is This Love</div>
            <div className="song-info--artist">Bob Marley</div>
          </div>
          <div className="controls--actions">
            <img src={require("../images/ic_repeat_black_24px.svg")} alt="repeat" className="actions--repeat"/>
            <img src={require("../images/ic_fast_rewind_black_24px.svg")} alt="back" className="actions--back"/>
            <img src={require("../images/ic_fast_forward_black_24px.svg")} alt="next" className="actions--forward"/>
          </div>
        </div>
      </main>
    </section>
  );
};

export default Player;
