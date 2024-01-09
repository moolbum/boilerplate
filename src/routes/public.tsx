import { Outlet, RouteObject } from 'react-router-dom';
import PATH from './path';

const publicRoute: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <Outlet />,
    children: [
      {
        path: PATH.TEST,
        element: <>TEST</>,
      },
    ],
  },
];

export default publicRoute;
