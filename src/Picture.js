import './Picture.css';
import React from "react";
import ReactDOM from "react-dom/client";

function Picture(props, props2){
    var back = props2;
    function getBack(){
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(back);
    }

    return(
        <div>
            <button className='close' onClick={getBack}>X</button>
            <img className='BigPicture' src={props}></img>
        </div>
    );
}
export default Picture;