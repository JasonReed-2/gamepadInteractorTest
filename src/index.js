import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Gamepad from 'react-gamepad'

ReactDOM.render(<Main />,
  document.getElementById('root')
);

function Main() {
  const [log, setLog] = useState([])

  const updateLog = (msg) => {
    const logger = log;
    logger.push(<li>{msg}</li>)
    if (logger.length >= 6) {
      logger.splice(0, 1)
    }
    setLog([...logger])
  }

  const connectHandler = (gamepadIndex) => {
    updateLog('Gamepad ' + gamepadIndex + ' connected!')
  }

  const buttonChange = (buttonName, down) => {
    if (down) {
      updateLog('' + buttonName + ' was pressed!')
    }
  }

  return (
    <>
    <Gamepad 
      onConnect={connectHandler}
      onButtonChange={buttonChange}
    ><h1>Welcome To Gamepad Interactor</h1></Gamepad>
    <ul>
      {log}
    </ul>
    </>
  )
}
