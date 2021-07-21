import React, { useEffect, useState } from 'react';

export const Video = () => {
  const [constrains, setConstrains] = useState({video: true, audio:false})
  useEffect(() => {
    console.log(constrains);
    try {
      let video = document.getElementById('player2');
      if(!constrains.video){
        video.srcObject.getTracks()[0].stop();
        return;
      }
      navigator.mediaDevices.getUserMedia(constrains)
        .then(function (stream) {
          if (video) {
            video.srcObject = stream;
          }
        })
        .catch(function (err) {
          console.error(err)
        });
      
    } catch (err) {
      console.log(err);
    }
  },[constrains]);
  const OnOf = () =>{
    setConstrains({...constrains, video:!constrains.video});
  }
  const changeCam = () =>{
    if(constrains.video){
      if(constrains.video.facingMode === "user"){
        setConstrains({...constrains, video:{ facingMode:{ exact: "environment"}}});
      }else{
        setConstrains({...constrains, video:{facingMode:"user"}});
      }
    }
  }
  const capture = () =>{
    const video = document.getElementById('player2');
    const width = video.offsetWidth
        , height = video.offsetHeight;
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.transform = 'scaleX(-1)';
    canvas.getContext('2d').drawImage(video, 0, 0, width,height);
    console.log(canvas.toDataURL());
  }

  return (
    <div>
      <div>
        <video style={{ transform: 'scaleX(-1)' }} id="player2" muted autoPlay></video>
      </div>
      <div>
        <button onClick={OnOf}>a</button>
        <button onClick={capture}>b</button>
        <button onClick={changeCam}>c</button>
      </div>

    </div>

  );
}
