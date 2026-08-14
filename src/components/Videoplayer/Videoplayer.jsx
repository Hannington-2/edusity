// import React from 'react';
import './Videoplayer.css';
import video from '../../assets/7971025-uhd_3840_2160_24fps.mp4';
import { useRef } from 'react';


const Videoplayer = ({playState,setPlayState}) => {
    // console.log(playState)
    const player = useRef(null);
    const ClosePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false)
        }
    }
  return (
    <div className={`videoplayer ${playState ? "" : 'hide'}`} ref={player} onClick={ClosePlayer}>
      <video src={video} autoPlay muted controls></video>
    </div>
  );
}

export default Videoplayer;
