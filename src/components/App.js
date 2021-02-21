import React from 'react';
import Header from './ui/Header'

function App() {
  return (
    <div className="App">
      <Header />
      hello!
      <p>this is a test</p>
    </div>
  );
}

export default App;

// Add some text to test
//some more text
// yet more text
// {[...new Array(120)] // creates 120 copies of the below onto the screen
//   .map(
//     () => `Cras mattis consectetur purus sit amet fermentum.
// Cras justo odio, dapibus ac facilisis in, egestas eget quam.
// Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
// Praesent commodo cursus magna, vel scelerisque nisl consectetur et.`,
//   )
//   .join('\n')}
