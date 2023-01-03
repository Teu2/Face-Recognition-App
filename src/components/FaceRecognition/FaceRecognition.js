
import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl, box }) => {
  return (
    <div className='center ma absolute'>
      <div className='parentbox absolute'>
        <img id='inputttimage' alt='' src={imageUrl} />
        <div className='bounding-box' style={{position: 'absolute', top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div>
        {/* <div className='bounding-box' style={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}}></div> */}
      </div>
    </div>
  );
}

export default FaceRecognition;