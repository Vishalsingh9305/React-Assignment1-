import React from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import First1 from './components/First1';
import Second1 from './components/Second1';
import Third1 from './components/Third1';
import Fourth1 from './components/Fourth1';
import Student from './components/Student';
import StudentClass from './components/StudentClass';
import Display from './components/Display';

function App() {
  const name = 'Vishal singh';
  const address = 'Pune';
  const scores = [90, 85, 95];

  const handleHelloClick = () => {
    alert('Hello!');
  };

  const handleByeClick = () => {
    alert('Bye!');
  };

  return (
    <div className="App">
      {/* Function Components */}
      <First />
      <Second />
      <Third />
      <Fourth />

      {/* Class Components */}
      <First1 />
      <Second1 />
      <Third1 />
      <Fourth1 />

      {/* Passing Props */}
      <Student name={name} address={address} scores={scores} />
      <StudentClass name={name} address={address} scores={scores} />

      {/* Display Component */}
      <Display name={name} address={address} />

      {/* Buttons */}
      <button onClick={handleHelloClick}>Say Hello</button>
      <button onClick={handleByeClick}>Say Bye</button>
    </div>
  );
}

export default App;
