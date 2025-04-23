import getBack from "./getBack";
import "./Categories.css";
import renderNature from "./Category";
import React from "react";
import ReactDOM from "react-dom/client";
import Picture from "./Picture";

var pic1 = "https://cdn.pixabay.com/photo/2025/03/13/14/00/mountain-9467826_640.jpg";
var pic2 = "https://cdn.pixabay.com/photo/2020/06/01/13/02/mountains-5246545_1280.jpg";
var pic3 = "https://cdn.pixabay.com/photo/2020/06/13/18/37/forest-5295361_1280.jpg";

function NaturePic1(){
    var element = Picture(pic1, renderNature());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function NaturePic2(){
    var element = Picture(pic2, renderNature());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function NaturePic3(){
    var element = Picture(pic3, renderNature());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function Nature(){
    return(
        <>
            <button className="back" onClick={getBack}>Powrót</button>
            <div className="categoryChoice">
                <p>
                    <img id="Pic1" src="https://cdn.pixabay.com/photo/2025/03/13/14/00/mountain-9467826_640.jpg" alt="Góry" height="200" onClick={NaturePic1}></img>
                </p>
                <p>
                    <img id="Pic2" src="https://cdn.pixabay.com/photo/2020/06/01/13/02/mountains-5246545_1280.jpg" alt="Góry" height="200" onClick={NaturePic2}></img>
                </p>
                <p>
                    <img id="Pic3" src="https://cdn.pixabay.com/photo/2020/06/13/18/37/forest-5295361_1280.jpg" alt="Las" height="200" onClick={NaturePic3}></img>
                </p>
            </div>
        </>
    );
}
export default Nature;