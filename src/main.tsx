import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { TonConnectButton, TonConnectUIProvider } from '@tonconnect/ui-react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>HOME page</h1>
      <Link to="/about">Link to about page</Link>
      <TonConnectButton style={{ marginTop: 20 }} />
    </div>
  );
};

const AboutUs = () => {
  return (
    <div>
      <h1>ABOUT US page</h1>
      <Link to="/">Link to home page</Link>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <AboutUs />,
  },
]);

const manifestUrl =
  'https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <RouterProvider router={router} />
    </TonConnectUIProvider>
  </StrictMode>
);
