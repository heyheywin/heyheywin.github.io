import React from 'react';

import useBreakpoint from '../components/breakpoint.js';

const App = (props) => {

  const point = useBreakpoint();

  return (
    <div>
      <h2> Current Device Type {point} </h2>
    </div>
  )
}

export default App;
