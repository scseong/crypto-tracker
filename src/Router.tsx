import { createBrowserRouter } from 'react-router-dom';
import Coins from './screen/Coins';
import Coin from './screen/Coin';
import NotFound from './screen/NotFound';
import Root from './Root';
import Chart from './screen/Chart';
import Price from './screen/Price';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '',
        element: <Coins />,
      },
      {
        path: ':coinId',
        element: <Coin />,
        children: [
          {
            path: 'chart',
            element: <Chart />,
          },
          {
            path: 'price',
            element: <Price />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;
