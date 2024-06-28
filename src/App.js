import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import RenderProps from './RenderProps/RenderProps';
import CompoundComponent from './CompoundComponent/CompoundComponent';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/render-props/">Render Props</Link>
            </li>
            <li>
              <Link to="compound-component/">Compound Component</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/render-props/" element={<RenderProps />} />
          <Route path="/compound-component/" element={<CompoundComponent />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
