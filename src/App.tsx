import React from 'react';
import { Grommet } from 'grommet';
import GlobalTheme from './GlobalTheme';
import Home from "./pages/Home";
// Set GlobalTheme here then no one has to worry about anyone messing around with it.

const App: React.FC = () => {
  return (
    <Grommet theme={GlobalTheme}>
      <Home />
    </Grommet>
  );
}

export default App;
