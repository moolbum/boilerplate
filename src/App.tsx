import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { privateRoute, publicRoute } from './routes';

const router = createBrowserRouter([...publicRoute, ...privateRoute]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
