/* eslint-disable no-unused-vars */

import { useEffect, useRef, useState } from 'react';
import './App.css';
import { NBBig, NBBigMemo, NBFast, NBFastMemo, NBSlow, NBSlowMemo, NBCount, NBCountMemo, NBBigDMemo } from './Noise';
import { listMe } from './utils';

function Spammer({ updateFreq, children }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((c) => c + 1);
    }, updateFreq);
    return () => {
      clearInterval(interval);
    };
  }, [updateFreq]);

  return (
    <div>
      <span>Count {count}</span>
      <div>
        {children({count})}
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Spammer updateFreq={100}>
        {({ count }) => (
          <>
            {/* <NBSlow /> */}
            {/* <NBSlowMemo /> */}

            {/* {listMe(1800, <NBFast />)} */}
            {listMe(2500, <NBFastMemo />)}

            {/* <NBCount /> */}
            {/* <NBCountMemo /> */}
            {/* <NBBig nests={nests} /> */}
            {/* <NBBigMemo nests={nests} /> */}
            {/* <NBBigDMemo nests={nests} /> */}
          </>
        )}
      </Spammer>
    </div>
  );
}

export default App;
