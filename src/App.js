import './App.css'
import React, {useState} from 'react'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignIn/SignUp'
import Particles from './components/Particles/Particles'


const USER_ID = 'teud100'; 
const PAT = '4c000f8f38354d03ad65ff9d232559f0'; // Your PAT (Personal Access Token) can be found in the portal under Authentification
const APP_ID = 'my-first-application'; // Change these to whatever model and image input you want to use
const MODEL_ID = 'face-detection';

function App() {
  
  // state handling
  const [input, setInput] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [route, setRoute] = useState("signin");
  const [box, setBox] = useState({});
  const [signedIn, setSignedIn] = useState(false); 

  const getFaceLocation = (boxData) => { // gets the face location retreived from the clarifai API
    console.log(JSON.parse(boxData, null, 2).outputs[0].data.regions[0].region_info.bounding_box);
    const clarifaiFace = JSON.parse(boxData, null, 2).outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputttimage');
    const width = Number(image.width);
    const height = Number(image.height);

    console.log(`W:${width} H:${height}`);

    return { // returns the top left right bottom positions needed to display the box as an object
      topRow: (clarifaiFace.top_row * height),
      leftCol: (clarifaiFace.left_col * width),
      rightCol: (width - (clarifaiFace.right_col * width)),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };

  }

  const displayFaceBox = (box) => { // sets the box 
    console.log(box.leftCol + " L");
    console.log(box.topRow + " T");
    console.log(box.rightCol + " R");
    console.log(box.bottomRow + " B");
    setBox(box);
  }
  
  const handleInputChange = (event) => {
    setInput(event.target.value);
  }

  const isSignedOut = (event) => {
    setRoute(event);
    setSignedIn(false);
  }

  const routeChange = (event) => {
    setRoute(event);
    setSignedIn(true);
  }

  const onButtonSubmit = (event) => { // submits url to clairfai face detection model
    setImgUrl(input);
    
    console.log("clicked");
      const raw = JSON.stringify({
        "user_app_id": {
            "user_id": USER_ID,
            "app_id": APP_ID
        },
        "inputs": [
            {
                "data": {
                    "image": {
                        "url": input
                    }
                }
            }
        ]
    });

    const requestOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Authorization': 'Key ' + PAT
        },
        body: raw
    };

    fetch(`https://api.clarifai.com/v2/models/${MODEL_ID}/outputs`, requestOptions)
        .then(response => response.text())
        .then(result => displayFaceBox(getFaceLocation(result)))
        .catch(error => console.log('error', error));
  }

  return (
    <div className="App">
      <Navigation onSignOut={isSignedOut} isSignedIn={signedIn}/>
      {route === 'home' 
        ? <div> 
            <ImageLinkForm onInputChange={handleInputChange} onBtnSubmit={onButtonSubmit} />
            <FaceRecognition imageUrl={imgUrl} box={box} />
          </div>
        : (route === 'signin' ? <SignIn asdad={routeChange} /> : <SignUp asdad={routeChange}/>)
      }
      <Particles/>
    </div>
  );

}

export default App;
