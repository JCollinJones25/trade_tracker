
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Stock from '../pages/Stock'

const Main = () => {

  return (
    <main>
      <Routes>
        <Route path="/" 
          element={<Home />} />
        <Route path="/:stockId" 
          element={<Stock />} />
      </Routes>
    </main>
  );
};

export default Main;
