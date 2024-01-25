import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { publicRoute } from './routes';

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
