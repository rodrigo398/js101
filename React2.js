import React, { useState, useEffect, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';

const Parent = props => {
  useEffect(() => console.log('Parent useEffect'));

  useLayoutEffect(() => console.log('Parent useLayout'));

  return (
    <div>
      <h2>Parent </h2>

      <Child />
    </div>
  );
};

const Child = ({ clicks }) => {
  useEffect(() => console.log('Child useEffect'));

  useLayoutEffect(() => console.log('Child useLayout'));

  return <p> Child {clicks}</p>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Parent />, rootElement);
