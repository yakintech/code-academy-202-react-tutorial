import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

import { LoginProvider } from './lessons/antdAdminPanel/LoginContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const queryClient = new QueryClient()

root.render(
    <QueryClientProvider client={queryClient}>
        <LoginProvider>
            <BrowserRouter>
                <App></App>
            </BrowserRouter>
        </LoginProvider>
    </QueryClientProvider>



);

