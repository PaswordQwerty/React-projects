import './App.css';
import './components/UI/Button'
import Button from './components/UI/Button';
import styles from 'styled-components'
import { useState } from 'react';
// npm install --save styled-components

const DivStyle = styles.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
  flex-direction: column;
  align-items: center;

  &.invalid Button{
    background-color: black;
    color: white;
  }

  & h2{
    color: red;
  }
`;

function App() {

  const [isInputValid, setIsInputValid] = useState(true);

  return (
    <div className="App">
      <DivStyle className={!isInputValid && 'invalid'}>
        <Button onClick={()=>setIsInputValid(!isInputValid)}>Кнопка</Button>
        <h2>Тест</h2>
      </DivStyle>
    </div>
  );
}

export default App;
