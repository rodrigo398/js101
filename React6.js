import React, {
  useRef,
  useState,
  useEffect,
  useLayoutEffect,
  useMemo,
  createContext,
  useContext,
} from 'react';
import ReactDOM from 'react-dom';

const ClickContext = createContext();

const ContextProvider = ({ children }) => {
  const [clicks, setClicks] = useState(0);
  console.log('L');
  useEffect(() => console.log('T'), [clicks]);

  return (
    <ClickContext.Provider value={{ clicks, setClicks }}>
      {children}
    </ClickContext.Provider>
  );
};

const useNegatedClicks = clicks => {
  console.log('W');

  return React.useMemo(() => {
    console.log('H');
    return -clicks;
  }, [clicks]);
};

const Parent = props => {
  console.log('O');
  const { clicks, setClicks } = useContext(ClickContext);
  const effetCount = useRef(0);

  useLayoutEffect(() => {
    console.log('A');
    effetCount.current = effetCount.current + 1;
  }, [clicks]);

  return (
    <div>
      <h2>
        Parent {clicks} {effetCount.current}
      </h2>
      <button onClick={() => setClicks(clicks + 1)}>Add click</button>
      <Child clicks={clicks} />
    </div>
  );
};

const Child = ({ clicks }) => {
  console.log('L');
  const inverseClicks = useNegatedClicks(clicks);
  return <p>Child {inverseClicks}</p>;
};

const rootElement = document.getElementById('root');
ReactDOM.render(
  <ContextProvider>
    <Parent />
  </ContextProvider>,
  rootElement
);
