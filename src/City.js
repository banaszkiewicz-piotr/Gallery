import getBack from "./getBack";
import "./Categories.css";
import "./Category.css";
import Picture from "./Picture";
import "./Picture.css";
import React from "react";
import ReactDOM from "react-dom/client";
import renderCity from "./Category"

var pic1 = "https://cdn.pixabay.com/photo/2025/03/09/08/26/bridge-9456745_1280.jpg";
var pic2 = "https://cdn.pixabay.com/photo/2024/09/20/01/37/al-seef-9060100_640.jpg";
var pic3 = "https://cdn.pixabay.com/photo/2022/03/27/12/46/chongqing-7094955_640.jpg";

function CityPic1(){
    var element = Picture(pic1, renderCity());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function CityPic2(){
    var element = Picture(pic2, renderCity());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function CityPic3(){
    var element = Picture(pic3, renderCity());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function City(){
    return(
        <>
            <button className="back" onClick={getBack}>Powrót</button>
            <div className="categoryChoice">
                <p>
                    <img id="Pic1" src="https://cdn.pixabay.com/photo/2025/03/09/08/26/bridge-9456745_1280.jpg" alt="Miasto" height="200" onClick={CityPic1}></img>
                </p>
                <p>
                    <img id="Pic2" src="https://cdn.pixabay.com/photo/2024/09/20/01/37/al-seef-9060100_640.jpg" alt="Miasto" height="200" onClick={CityPic2}></img>
                </p>
                <p>
                    <img id="Pic3" src="https://cdn.pixabay.com/photo/2022/03/27/12/46/chongqing-7094955_640.jpg" alt="Miasto" height="200" onClick={CityPic3}></img>
                </p>
            </div>
        </>
    );
}
export default City;