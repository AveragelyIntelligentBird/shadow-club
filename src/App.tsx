import './styles.css';
import { Navigate, Route, Routes, HashRouter } from 'react-router-dom';
import Cabal from './Cabal';

export default function App() {
  return (
    <HashRouter>
      <div className="h-100">
        <Routes>
          <Route path="/"
                 element={<Navigate to="Cabal" />} />
          <Route path="/Cabal/*" element={<Cabal />} />
        </Routes>
      </div>
    </HashRouter>
);}