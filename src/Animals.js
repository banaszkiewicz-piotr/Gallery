import getBack from "./getBack";
import "./Categories.css";
import "./Category.css";
import renderAnimals from "./Category";
import React from "react";
import ReactDOM from "react-dom/client";
import Picture from "./Picture";

var pic1 = "https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_640.jpg";
var pic2 = "https://cdn.pixabay.com/photo/2019/10/24/17/24/squirrel-4574759_1280.jpg";
var pic3 = "https://cdn.pixabay.com/photo/2020/02/24/06/00/fat-4875285_1280.jpg";

function AnimalPic1(){
    var element = Picture(pic1, renderAnimals());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function AnimalPic2(){
    var element = Picture(pic2, renderAnimals());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function AnimalPic3(){
    var element = Picture(pic3, renderAnimals());
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(element);
}

function Animals(){
    return(
        <>
            <button className="back" onClick={getBack}>Powrót</button>
            <div className="categoryChoice">
                <p>
                    <img id="Pic1" src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_640.jpg" alt="Kot" height="200" onClick={AnimalPic1}></img>
                </p>
                <p>
                    <img id="Pic2" src="https://cdn.pixabay.com/photo/2019/10/24/17/24/squirrel-4574759_1280.jpg" alt="Wiewiórka" height="200" onClick={AnimalPic2}></img>
                </p>
                <p>
                    <img id="Pic3" src="https://cdn.pixabay.com/photo/2020/02/24/06/00/fat-4875285_1280.jpg" alt="Świnka_xD" height="200" onClick={AnimalPic3}></img>
                </p>
            </div>
        </>
    );
}
export default Animals;