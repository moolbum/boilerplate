import { RouteObject } from 'react-router-dom';
import { MainPage } from '@src/pages';
import ProtectedPublicRoute from '../components/organisms/ProtectedPublicRoute';
import PATH from './path';
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
