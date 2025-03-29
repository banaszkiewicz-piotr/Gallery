import getBack from "./getBack";
import "./Categories.css";
import "./Category.css";

function Nature(){
    return(
        <>
            <button className="back" onClick={getBack}>Powrót</button>
            <div className="categoryChoice">
                <p>
                    <img id="Pic1" src="https://cdn.pixabay.com/photo/2025/03/13/14/00/mountain-9467826_640.jpg" alt="Góra" height="200"></img>
                </p>
                <p>
                    <img id="Pic2" src="https://cdn.pixabay.com/photo/2020/06/01/13/02/mountains-5246545_1280.jpg" alt="Góry" height="200"></img>
                </p>
                <p>
                    <img id="Pic3" src="https://cdn.pixabay.com/photo/2020/06/13/18/37/forest-5295361_1280.jpg" alt="Las" height="200"></img>
                </p>
            </div>
        </>
    );
}
export default Nature;