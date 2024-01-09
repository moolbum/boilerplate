import { RouteObject } from 'react-router-dom';
import PATH from './path';
import MainPage from '../pages/MainPage';
import ProtectedPublicRoute from '../components/template/ProtectedPublicRoute';

const publicRoute: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <ProtectedPublicRoute />,
    children: [
      {
        path: PATH.MAIN,
        element: <MainPage />,
      },
    ],
  },
];

export default publicRoute;
