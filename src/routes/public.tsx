import { RouteObject } from 'react-router-dom';
import PATH from './path';
import ProtectedPublicRoute from '../components/organisms/ProtectedPublicRoute';
import { MainPage } from '@src/pages';

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
