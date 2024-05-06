import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

const Display = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const App = () => {
  const [counter, setCounter] = useState(0)

  console.log('rendering with counter value', counter)

  const increaseByOne = () => {

    console.log('increasing, value before', counter)
    setCounter(counter + 1)
  }

  const decreaseByOne = () => { 

    console.log('decreasing, value before', counter)
    setCounter(counter - 1)
  }

  const setToZero = () => {

    console.log('resetting to zero, value before', counter)
    setCounter(0)
  }

  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increaseByOne} text="plus" />
      <Button onClick={setToZero} text="zero" />
      <Button onClick={decreaseByOne} text="minus" />
    </div>
  )
} 

export default App 

/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>
        plus
      </button>
      <button onClick={handleClick}>click</button>
      <button onClick={() => setCounter(0)}> 
        zero
      </button>
    </div>
  )
} 

export default App */

/* const App = () => {
  const [ counter, setCounter ] = useState(0)

  setTimeout(
    () => setCounter(counter + 1),
    1000
  )

  return (
    <div>{counter}</div>
  )
}

export default App */


const Header = (props) => {
  console.log("header props", props);
  return <h1>{props.course}</h1>;
};
const Parts = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  );
};

const Content = (props) => {
  console.log("content", props);
  return ( 
    <div>
      {/* Con esto lo haría sin necesidad de llamar otro modulo
      <p>{props.parts[0].name} {props.parts[0].exercises}</p>
      <p>{props.parts[1].name} {props.parts[1].exercises}</p>
      <p>{props.parts[2].name} {props.parts[2].exercises}</p> */}
      <Parts part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Parts part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Parts part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  );
};
const Total = (props) => {
  console.log("Total", props);
  return (
    <p>
      Number of exercises{" "}
      {props.parts[0].exercises +
        props.parts[1].exercises +
        props.parts[2].exercises}
    </p>
  );
};

/* const App = () => {
  //course= "Half Stack application development",
  //parts= [
  const course = {
    name: "Half Stack application development",
    parts:[
      {name: "Fundamentals of React", exercises: 10},
      {name: "Using props to pass data", exercises: 7},
      {name: "State of a component", exercises: 14}
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  );
};

export default App; */



/* const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name ="Jorge"/>
      <Hello name ="Carlos"/>
      <Hello name ="Álvaro"/>
    </div>
  )
}  */

//componentes, estos son renderizados depués en el html
/* const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now, a+b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
} */

/* const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
} */



/* const App = () => {
  return [
    <Hello name ="Jorge"/>,
    <Hello name ="Carlos"/>,
    <Hello name ="Álvaro"/>
  ]
} */

//export default App




/* import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App */
