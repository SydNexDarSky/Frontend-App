import { useState } from 'react';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Home />
    </>
  )
}

export default App;
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          countss is {count}
        </button>
        <button>This is for me</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more about Vitejs
      </p>
>>>>>>> ba848c43736d12ec7b38f13d229e7465081c8d25
    </>
  )
}

export default App
