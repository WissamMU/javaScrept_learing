import React, { useState } from 'react';
import styled from 'styled-components';
import ClickCount from './ClickCountk';

function OffLine() {
  return <h1>you are offLine</h1>
}

function OnLine() {
  return <h1>you are onLine</h1>
}

const myArray = ["sup", "sup2", "sup3", "sup4", "sup5", "sup"]

const Title = styled.h1`
  color: ${props => props.isBlue ? "blue" : "636363"};
  font-size: 22px;
`
const Press = styled.button`
  background-color: 'blue';
  color: 'white';
  padding: 10px 20px;
  border: none;
  cursor: pointer;
`



function App() {
  const [isBlue, setBlue] = useState(false);
  {/* test Conditional Rendering */ }
  const [onLine, setOnline] = useState(true);
  let userState = <OffLine />
  const anArray = myArray.map((sups , index) => <li key={index}>{ sups }</li>)

  if (onLine) {
    userState = <OnLine />
  }
  if (onLine) {
    return (
      <React.Fragment>
        <Title isBlue={isBlue}> its always</Title>
        <Press onClick={() => setBlue(!isBlue)} >hello</Press>
        {userState}
        {window.outerHeight > 800 && <h1> sup</h1>}
        <ul>
          {anArray}
        </ul>
      </React.Fragment>
    )
  }


  {/* test hooks */ }
  // return (
  //   <div>
  //     <ClickCount />
  //   </div>
  // );
}

export default App;
