
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { NBBig, NBBigMemo, NBFast, NBFastMemo, NBSlow, NBSlowMemo, NBCount, NBCountMemo, NBBigDMemo } from './Noise';

function Perf({ updateFreq, ms, nests }) {
  const [, forceUpdate] = useState(null);
  const [count, setCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, updateFreq);
    return () => {
      clearInterval(interval);
    };
  }, [updateFreq]);

  const handleForceUpdate = () => forceUpdate({});

  return (
    <div>
      <span>Count {count}</span>
      <span>Render Count {renderCount.current}</span>
      <button onClick={handleForceUpdate}>Force Update</button>
      <div>
        <NBSlow ms={ms} />
        <NBSlowMemo ms={ms} />
        <NBFast ms={ms} />
        <NBFastMemo ms={ms} />
        <NBCount ms={count} />
        <NBCountMemo ms={count} />
        <NBBig ms={ms} nests={nests} />
        <NBBigMemo ms={ms} nests={nests} />
        <NBBigDMemo ms={ms} nests={nests} />
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Perf updateFreq={64} ms={2} nests={3} />
    </div>
  );
}

export default App;
