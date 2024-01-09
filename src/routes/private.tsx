import { Outlet, RouteObject } from 'react-router-dom';
import PATH from './path';

const privateRoute: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <Outlet />,
    children: [
      {
        path: `${PATH.TEST}/:id`,
        element: <>TEST_CHILDREN</>,
      },
    ],
  },
];
export default privateRoute;
