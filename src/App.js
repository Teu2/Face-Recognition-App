import './App.css'
import React, {Component} from 'react'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import SignIn from './components/SignIn/SignIn'
import SignUp from './components/SignIn/SignUp'
import ParticlesBg from 'particles-bg'
import Particles from './components/Particles/Particles'
import Clarifai from 'clarifai'

const USER_ID = ''; 
const PAT = ''; // Your PAT (Personal Access Token) can be found in the portal under Authentification
const APP_ID = ''; // Change these to whatever model and image input you want to use
const MODEL_ID = 'face-detection';
const MODEL_VERSION_ID = 'aa7f35c01e0642fda5cf400f543e7c40';    

class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imgUrl: '',
      box: {},
      route: 'signin', // keeps track of where the user is
      signedIn: false
    }
  }

  getFaceLocation = (boxData) => {
    console.log(JSON.parse(boxData, null, 2).outputs[0].data.regions[0].region_info.bounding_box);
    const clarifaiFace = JSON.parse(boxData, null, 2).outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputttimage');
    const width = Number(image.width);
    const height = Number(image.height);

    console.log(`W:${width} H:${height}`);

    return {
      topRow: (clarifaiFace.top_row * height),
      leftCol: (clarifaiFace.left_col * width),
      rightCol: (width - (clarifaiFace.right_col * width)),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    };

  }

  displayFaceBox = (box) => {
    console.log(box.leftCol + " L");
    console.log(box.topRow + " T");
    console.log(box.rightCol + " R");
    console.log(box.bottomRow + " B");
    this.setState({box: box})
  }
  
  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  isSignedOut = (event) => {
    this.setState({route: event});
    this.setState({signedIn: false});
  }

  routeChange = (event) => {
    this.setState({route: event});
    this.setState({signedIn: true});
  }

  onBtnSubmit = (event) => {
    this.setState({imgUrl: this.state.input});
    
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
                        "url": this.state.input
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
        .then(result => this.displayFaceBox(this.getFaceLocation(result)))
        .catch(error => console.log('error', error));
  }

  render(){
    return (
      <div className="App">
        <Navigation onSignOut={this.isSignedOut} isSignedIn={this.state.signedIn}/>
        {this.state.route === 'home' 
          ? <div> 
              <ImageLinkForm onInputChange={this.onInputChange} onBtnSubmit={this.onBtnSubmit} />
              <FaceRecognition imageUrl={this.state.imgUrl} box={this.state.box} />
            </div>
          : (this.state.route === 'signin' ? <SignIn asdad={this.routeChange} /> : <SignUp asdad={this.routeChange}/>)
        }
        <Particles/>
      </div>
    );
  }
}

export default App;
