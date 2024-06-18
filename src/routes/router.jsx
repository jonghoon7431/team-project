import Layout from '@/Layouts/Layout';
import FeedWrite from '@/pages/FeedWrite/FeedWrite';
import { Home } from '@/pages/Home';
import Detail from '@/pages/detail/Detail';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

    children: [
      { path: '', element: <Home /> },
      {
        path: 'detail/:id',
        element: <Detail />
      },
      { path: '/writingpage', element: <FeedWrite /> }
    ]
  }
]);
