import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from "./routes";
import ScrollTop from './components/ScrollTop';

const Loading = () => <div className="pt-3 text-center">Loading...</div>

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={Loading()}>
                <ScrollTop>
                    <AppRoutes />
                </ScrollTop>
            </Suspense>
        </BrowserRouter>
    );
}
export default App;