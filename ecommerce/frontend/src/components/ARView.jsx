import React, { useEffect } from 'react';
import 'aframe';
import 'aframe-ar';

const ARView = () => {
  useEffect(() => {
    const startVideo = async () => {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        const video = document.querySelector('#video');
        video.srcObject = stream;
        video.play();
      } catch (error) {
        console.log('Something went wrong!');
      }
    };

    startVideo();
  }, []);

  return (
    <a-scene embedded arjs="sourceType: webcam; debugUIEnabled: false;">
      <a-marker preset="custom" type="pattern" url="../assets/pattern-marker.patt">
        <a-text value="T-Cloth" align="center" position="0 0.2 1" rotation="-90 0 0" color="white">
          <a-animation attribute="rotation" repeat="indefinite" direction="alternate" easing="linear" dur="500" from="-90 0.2 -10" to="-90 0.2 10"></a-animation>
        </a-text>
        <a-box position="0 0.5 0" material={`color: ${color};`}></a-box> {}
      </a-marker>
      <a-entity camera></a-entity>
      <a-entity>
        <a-plane scale="2 2 2" rotation="-90 0 0" material="shader: flat; src: #video"></a-plane>
        <video id="video" playsInline style={{ display: 'none' }}></video>
      </a-entity>
    </a-scene>
  );
};

export default ARView;
