import { createRoot } from 'react-dom/client';
import './style/index.css';
import { RouterProvider } from 'react-router';
import router from './route/router';
import Providers from './utils/Providers';

createRoot(document.getElementById('root')!).render(
    <Providers>
        <RouterProvider router={router} />
    </Providers>
);