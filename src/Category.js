import './Category.css';
import City from './City';
import React from 'react';
import ReactDOM from 'react-dom/client';

function renderCity()
{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <City/>
        </React.StrictMode>
    );
}

function Category(){
    return(
        <>
        <div className="categoryChoice">
            <p  onClick={renderCity}>
                <label for="Pic1">Miasto</label>
                <img id="Pic1" src="https://cdn.pixabay.com/photo/2025/03/09/08/26/bridge-9456745_1280.jpg" alt="Miasto" height="200"></img>
            </p>
            <p>
                <label for="Pic2">Natura</label>
                <img id="Pic2" src="https://cdn.pixabay.com/photo/2025/03/13/14/00/mountain-9467826_640.jpg" alt="Natura" height="200"></img>
            </p>
            <p>
                <label for="Pic3" >Zwierzęta</label>
                <img id="Pic3" src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_640.jpg" alt="Zwierzęta" height="200"></img>
            </p>
        </div>
    </>
    );
}
export default Category;