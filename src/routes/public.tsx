import { RouteObject } from 'react-router-dom';
import PATH from './path';
import ProtectedPublicRoute from '../components/organisms/ProtectedPublicRoute';
import { MainPage } from '@src/pages';
import { MainPageLayout } from '@/components/templates';

const publicRoute: RouteObject[] = [
  {
    path: PATH.ROOT,
    element: <ProtectedPublicRoute />,
    children: [
      {
        path: PATH.MAIN,
        element: (
          <MainPageLayout>
            <MainPage />
          </MainPageLayout>
        ),
      },
    ],
  },
];

export default publicRoute;
