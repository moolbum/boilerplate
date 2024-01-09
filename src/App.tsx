import React from 'react';
import GlobalStyle from './styles/globalStyle';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import publicRoute from './routes/public';
import privateRoute from './routes/private';

const router = createBrowserRouter([...privateRoute, ...publicRoute]);

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
