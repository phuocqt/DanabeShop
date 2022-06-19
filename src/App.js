import Cart from 'features/Cart';
import ProductFeature from 'features/Product/index';
import DetailPage from 'features/Product/Pages/DetailPage';
import ListPage from 'features/Product/Pages/ListPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import TodoFeature from './features/Todo';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} />

        <Route path="/todos" element={<TodoFeature />} />
        <Route path="/products" element={<ProductFeature />}>
          <Route path="/products" element={<ListPage />} />
          <Route path="/products/:productId/*" element={<DetailPage />} />
        </Route>
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
