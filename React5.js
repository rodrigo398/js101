import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
} from 'react';
import ReactDOM from 'react-dom';

const Parent = props => {
  console.log('Parent');

  const clickCount = useRef(0);

  return (
    <div>
      <h2>Parent {clickCount.current}</h2>
      <button
        onClick={() => {
          clickCount.current = clickCount.current + 1;
          console.log('Click count ' + clickCount.current);
        }}
      >
        Add extra click
      </button>
      <Child clickCount={clickCount} />
    </div>
  );
};

const Child = ({ clickCount }) => {
  console.log('Child');

  return <p> Child {clickCount.current}</p>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Parent />, rootElement);
