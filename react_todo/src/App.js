import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Header from './Header';

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
