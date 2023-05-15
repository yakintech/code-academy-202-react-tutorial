import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import App2 from './App2';
import { LoginProvider } from './lessons/antdAdminPanel/LoginContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LoginProvider>
        <BrowserRouter>
            <App2></App2>
        </BrowserRouter>
    </LoginProvider>


);

