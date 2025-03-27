import getBack from "./getBack";
import "./Categories.css";
import "./Category.css";

function City(){
    return(
        <>
            <button onClick={getBack}>Powrót</button>
            <div className="categoryChoice">
                <p>
                    <img id="Pic1" src="https://cdn.pixabay.com/photo/2025/03/09/08/26/bridge-9456745_1280.jpg" alt="Miasto" height="200"></img>
                </p>
                <p>
                    <img id="Pic2" src="https://cdn.pixabay.com/photo/2024/09/20/01/37/al-seef-9060100_640.jpg" alt="Miasto" height="200"></img>
                </p>
                <p>
                    <img id="Pic3" src="https://cdn.pixabay.com/photo/2022/03/27/12/46/chongqing-7094955_640.jpg" alt="Miasto" height="200"></img>
                </p>
            </div>
        </>
    );
}
export default City;