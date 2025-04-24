import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AccessibilityProvider } from './context/AccessibilityContext';
import App from './App.tsx';
import FreeResources from './pages/FreeResources.tsx';
import SixthStop from './pages/SixthStop.tsx';
import Opportunities from './pages/Opportunities.tsx';
import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/free-resources',
    element: <FreeResources />,
  },
  {
    path: '/sixth-stop',
    element: <SixthStop />,
  },
  {
    path: '/opportunities',
    element: <Opportunities />,
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AccessibilityProvider>
      <RouterProvider router={router} />
    </AccessibilityProvider>
  </StrictMode>
);
