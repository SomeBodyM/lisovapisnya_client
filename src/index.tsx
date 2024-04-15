import ReactDOM from 'react-dom/client';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ErrorBoundary} from 'app/providers/ErrorBoundary';
import {StoreProvider} from "app/providers/StoreProvider";
import './shared/config/i18n/i18n';
import 'app/styles/index.scss';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <BrowserRouter>
        <StoreProvider>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </StoreProvider>
    </BrowserRouter>
);

