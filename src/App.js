import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar/NavBar';
import TextBox from './components/TextBox/TextBox';
import { Container, Row } from 'react-bootstrap';
import Properties from './components/Properties/Properties';
import OutPut from './components/OutPut/OutPut';
import DownloadBtns from './components/DownloadBtns/DownloadBtns';
import Footer from './components/Footer/Footer';

function App() {
  const [heading, setHeading] = useState("");
  const [textArea, setTextArea] = useState("");
  const fonts = [
    ["'Caveat', cursive", 'Caveat'],
    ["'Crafty Girls', cursive", "Crafty Girls"],
    ["'Dancing Script', cursive", "Dancing Script"],
    ["'Gloria Hallelujah', cursive", "Gloria Hallelujah"],
    ["'Handlee', cursive", "Handlee"],
    ["'Homemade Apple', cursive", "Homemade Apple"],
    ["'Indie Flower', cursive", "Indie Flower"],
    ["'Mansalva', cursive", "Mansalva"],
    ["'Patrick Hand', cursive", "Patrick Hand"],
    ["'Schoolbell', cursive", "Schoolbell"],
    ["'Swanky and Moo Moo', cursive", "Swanky and Moo Moo"]
  ];
  const colors = [
    ['#000000','Dark Black'],
    ['#253342','Light Black'],
    ['#000f55','Dark Blue'],
    ['#011b96','Light Blue'],
    ['#8c0e19','Dark Red'],
    ['#bb1422','Light Red']
  ];
  const papers = [
    ['blue-lined-paper.png','Blue Lined Paper'],
    ['white-paper.jpg','White Paper']
  ];
  const [fontFamily, setFontFamily] = useState(fonts[0] || "");
  const [currColor, setCurrColor] = useState(colors[0] || "");
  const [currPaper, setCurrPaper] = useState(papers[0] || "");

  return (
    <>
      <NavBar />
      <TextBox heading={heading} setHeading={setHeading} textArea={textArea} setTextArea={setTextArea} />
      <Container className="col-md-6">
        <Row>
          <div className="col-md-4 p-1">
            Font Family:
            <Properties currValue={fontFamily} options={fonts} handleChange={setFontFamily} isFontComponent={true} />
          </div>  
          <div className="col-md-4 p-1">
            Color:
            <Properties currValue={currColor} options={colors} handleChange={setCurrColor} isColorComponent={true} />
          </div>  
          <div className="col-md-4 p-1">
            Paper Type:
            <Properties currValue={currPaper} options={papers} handleChange={setCurrPaper} />
          </div>
        </Row>
      </Container>

      <h3 className="container col-md-6 mt-5">Output:</h3>
      <OutPut fontFamily={fontFamily[0]} heading={heading} text={textArea} paper={currPaper[0]} color={currColor[0]} />
      <DownloadBtns heading={heading} text={textArea} />
      <Footer />
    </>
  );
}

export default App;
