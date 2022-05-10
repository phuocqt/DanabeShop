import ProductFeature from 'features/Product/index';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import AlbumFeature from './features/Album';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />

      {/* <CounterFeature /> */}
      <Routes>
        <Route path="/todos" element={<TodoFeature />} />
      </Routes>
      <Routes>
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
      <Routes>
        <Route path="/products" element={<ProductFeature />} />
      </Routes>
    </div>
  );
}

export default App;
