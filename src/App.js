import React, { Component } from 'react';
import Footer from "./components/Footer/Footer";
import Card from "./components/Card/Card";
// import CardBtn from "./components/CardBtn/CardBtn";
import Container from './components/Container/Container';
import Row from './components/Row/Row';
import Navbar from "./components/Navbar/Navbar";
import Indicator from "./components/Indicator/Indicator";
import './App.css';

class App extends Component {
  state = {
    images: [
      "https://placeimg.com/150/150/nature",
      "https://placeimg.com/150/150/nature?t=1529159928964",
      "https://placeimg.com/150/150/nature?t=1529159940796",
      "https://placeimg.com/150/150/nature?t=1529159940745",
      "https://placeimg.com/150/150/nature?t=1529159928924",
      "https://placeimg.com/150/150/nature?t=1529159940797",
      "https://placeimg.com/150/150/nature?t=1529159940740",
      "https://placeimg.com/150/150/nature?t=1529159928969",
      "https://placeimg.com/150/150/nature?t=1529159940790",
      "https://placeimg.com/150/150/nature?t=1529159940749",
      "https://placeimg.com/150/150/nature?t=1529159928921",
      "https://placeimg.com/150/150/nature?t=1529159940711",
      "https://placeimg.com/150/150/nature?t=1529159940773",
      "https://placeimg.com/150/150/nature?t=1529159940799",
      "https://placeimg.com/150/150/nature?t=1529159940747",
      "https://placeimg.com/150/150/nature?t=1529159928927",
      "https://placeimg.com/150/150/nature?t=1529159940717",
      "https://placeimg.com/150/150/nature?t=1529159940777",
    ],
    alreadyClicked: [],
    currentScore: 0,
    previousScore: 0,
    indicator: { 
      info: "Click the + to get points. If you click an image twice you lose.",
      style: "black",
  },
}

  componentDidMount() {
    this.shuffleArray(this.state.images);
  }

  handleBtnClick = event => {
    
    const imageValue = event.target.getAttribute("value");
    let newState = { ...this.state };


    // increments current score on correct click

    
    console.log(imageValue)

    if (this.state.alreadyClicked.indexOf(imageValue) > -1) {
      newState.alreadyClicked = [];
      newState.previousScore = newState.currentScore;
      newState.currentScore = 0;
      newState.indicator.info = "Game Over. Try Again.";
      newState.indicator.style = "red";
      console.log("GameOver")
    } else {
      newState.currentScore = newState.currentScore + 1;
      newState.alreadyClicked.push(imageValue);
      newState.indicator.info = "Good guess. Keep going";
      newState.indicator.style = "black";
    }
    // shuffles the array of image objects for the user to pick
    this.shuffleArray(newState.images);
    // Replace our component's state with newState
    this.setState({ ...newState });
    newState;
  };

  shuffleArray = array => {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  render() {
    return (
      <React.Fragment>
        <Navbar 
          currentScore={this.state.currentScore}
          previousScore={this.state.previousScore}/>
          <Indicator 
          info={this.state.indicator.info}
          style={this.state.indicator.style}/>
        <Container id="main-container">

          {/* <Row> */}
            {this.state.images.map((item, i) =>
              <Card
                key={i}
                handleBtnClick={this.handleBtnClick}
                image={this.state.images[i]}
                value={this.state.images[i]} />)}
          {/* </Row> */}
        </Container>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
