import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Parent = props => {
  console.log('Parent');

  const [clicks, setClicks] = useState(0);

  useEffect(() => {
    console.log('Parent useEffect');
  }, [clicks]);

  return (
    <div>
      <h2>Parent {clicks}</h2>
      <button onClick={() => setClicks(clicks + 1)}> Add extra click</button>
      <Child clicks={clicks} />
    </div>
  );
};

const Child = ({ clicks }) => {
  console.log('Child');

  useEffect(() => {
    console.log('CHILD useeffects');
  }, [clicks]);

  return <p> Child {clicks}</p>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Parent />, rootElement);
