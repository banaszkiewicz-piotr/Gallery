import React from 'react';
import ReactDOM from 'react-dom/client';
import Category from './Category';

function getBack(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <Category/>
        </React.StrictMode>
    );
}
export default getBack;