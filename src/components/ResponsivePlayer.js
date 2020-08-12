import React from 'react';
import ReactPlayer from 'react-player';
import '../css/responsive-player.css';

export const ResponsivePlayer = () => {
      return (
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url="https://player.vimeo.com/video/189176993"
            width='80%'
            height='80%'
            controls={true}
          />
        </div>
      )
  }