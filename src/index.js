import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductPage from './pages/ProductPage';

import poligrafiya from './data/poligrafiya';
import aksessuarlar from './data/aksessuarlar';
import tashqiRekalama from './data/tashqiRekalama';
const products = {};

poligrafiya.map(
  (item) =>
    (products[item.title.toLowerCase()] = {
      title: item.title,
      text: item.text,
      image: item.image,
      url: item.url,
    }),
);

aksessuarlar.map(
  (item) =>
    (products[item.title.toLowerCase()] = {
      title: item.title,
      subtitle: item.subtitle,
      text: item.text,
      image: item.image,
      url: item.url,
    }),
);

tashqiRekalama.map(
  (item) =>
    (products[item.title.toLowerCase()] = {
      title: item.title,
      subtitle: item.subtitle,
      text: item.text,
      image: item.image,
      url: item.url,
    }),
);

console.log(products);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <App
              poligrafiya={poligrafiya}
              tashqiRekalama={tashqiRekalama}
              aksessuarlar={aksessuarlar}
            />
          }
        />
        <Route path="/product/:type" element={<ProductPage data={products} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
