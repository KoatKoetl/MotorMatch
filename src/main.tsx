import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner.tsx';
import './index.css';
import { store } from './redux/store.ts';
import { router } from './routes/routes.tsx';

if (process.env.NODE_ENV === 'production') disableReactDevTools();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster duration={1000} position="top-center" richColors />
    </Provider>
  </React.StrictMode>
);
