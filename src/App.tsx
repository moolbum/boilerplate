import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoute } from './routes';
import { GlobalStyle } from './styles';

const router = createBrowserRouter([...publicRoute]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
