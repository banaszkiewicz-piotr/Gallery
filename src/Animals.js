import getBack from "./getBack";
import "./Categories.css";
import "./Category.css";

function Animals(){
    return(
        <>
            <button className="back" onClick={getBack}>Powrót</button>
            <div className="categoryChoice">
                <p>
                    <img id="Pic1" src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_640.jpg" alt="Kot" height="200"></img>
                </p>
                <p>
                    <img id="Pic2" src="https://cdn.pixabay.com/photo/2019/10/24/17/24/squirrel-4574759_1280.jpg" alt="Wiewiórka" height="200"></img>
                </p>
                <p>
                    <img id="Pic3" src="https://cdn.pixabay.com/photo/2020/02/24/06/00/fat-4875285_1280.jpg" alt="Świnka_xD" height="200"></img>
                </p>
            </div>
        </>
    );
}
export default Animals;