import { createRoot } from 'react-dom/client';
import './style/index.css';
import { RouterProvider } from 'react-router';
import router from './route/router';

createRoot(document.getElementById('root')!).render(<RouterProvider router={router} />)