import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import ReactTimeout from 'react-timeout'
import { shallowEqual, useDispatch, useSelector, useStore } from 'react-redux';
import { DECREMENT, INCREMENT } from './redux/increment/increment.reducer';
import { increaseCounter } from './redux/increment/increment.action';
import { incrementAsync } from './redux/sagas';
import {NewComponent} from './Component'
import React from 'react'


const Form = () => {
  return (
    <form>
      <input label="Name" />
      <input label="email" />
      <button>click to go fuck yourself</button>
    </form>
  )
}

const Button = () => {
  return <button> bitches aint shit </button>
}


const Input = () => 
  <input label="whats teh birthday of your bitch?"/>

const Card = () => {
  return <div style={{backgroundColor: "springgreen"}}>
    its a fucking card, just believe it
  </div>
}

const Tracker = ({render }) => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const renderRef = useRef(null);

  useEffect(() => {
    setX(Math.round(renderRef.current.getBoundingClientRect().x));
    setY(Math.round(renderRef.current.getBoundingClientRect().y));
  }, [renderRef, renderRef?.current?.getBoundingClientRect().x ?? 0, renderRef?.current?.getBoundingClientRect().y ?? 0])

  return (
    <div className="tracker-wrapper" ref={renderRef}>
      <div className="tracker">
        [x: {x}, y: {y}]
      </div>
      { render() }
    </div>
  )
}

const TrackedForm = () => <Tracker render={() => <Form />}/>
const TrackedButton = () => <Tracker render={() => <Button />}/>
const TrackedCard = () => <Tracker render={() => <Card />} />
const TrackedInput = () => <Tracker render={() => <Input />}/>

function App() {

  return (
    <div className="App">
      <TrackedForm />
      <TrackedButton />
      <TrackedCard />
      <TrackedInput />     
    </div>
  );
}

export default App;

