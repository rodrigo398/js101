import React, { useState, useEffect, useLayoutEffect, useMemo } from 'react';
import ReactDOM from 'react-dom';

const Parent = props => {
  console.log('Parent');

  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <h2>Parent {clicks}</h2>
      <button onClick={() => setClicks(clicks + 1)}> Add extra click</button>
      <Child data={{ multiplier: 5 }} />
    </div>
  );
};

const Child = ({ data }) => {
  console.log('Child');

  const memoData = useMemo(() => {
    console.log('useMemo');
    return data.multiplier * 3;
  }, [data]);

  return <p> Child {memoData}</p>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(<Parent />, rootElement);
