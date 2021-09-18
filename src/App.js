import './App.css';
import React, {useState} from 'react';
import NavBar from './components/NavBar';
import TextBox from './components/TextBox';
import { Container, Row } from 'react-bootstrap';
import Properties from './components/Properties';
import OutPut from './components/OutPut';

function App() {
  const [textArea, setTextArea] = useState("");
  const fonts = [
    ['Swanky and Moo Moo','Swanky and Moo Moo'],
    ['f2','2']
  ];
  const colors = [
    ['c1','1'],
    ['c2','2']
  ];
  const papers = [
    ['p1','1'],
    ['p2','2']
  ];
  const [fontFamily, setFontFamily] = useState(fonts[0][0] || "");
  const [currColor, setCurrColor] = useState(colors[0][0] || "");
  const [currPaper, setCurrPaper] = useState(papers[0][0] || "");

  return (
    <>
      <NavBar />
      <TextBox textArea={textArea} setTextArea={setTextArea} />
      <Container className="col-md-6">
        <Row>
          <div className="col-md-4 p-1">
            Font Family:
            <Properties currValue={fontFamily} options={fonts} handleChange={setFontFamily} isFontComponent={true} />
          </div>  
          <div className="col-md-4 p-1">
            Color:
            <Properties currValue={currColor} options={colors} handleChange={setCurrColor} />
          </div>  
          <div className="col-md-4 p-1">
            Paper Type:
            <Properties currValue={currPaper} options={papers} handleChange={setCurrPaper} />
          </div>
        </Row>
      </Container>

        <OutPut fontFamily={fontFamily} text={textArea} />
    </>
  );
}

export default App;
