import './Category.css';

function Category(){
    return(
        <>
        <div className="categoryChoice">
            <img id="Pic1" src="https://cdn.pixabay.com/photo/2025/03/09/08/26/bridge-9456745_1280.jpg" alt="Miasto"></img>
            <label for="Pic1">Miasto</label>
            <img id="Pic2" src="https://cdn.pixabay.com/photo/2025/03/13/14/00/mountain-9467826_640.jpg" alt="Natura"></img>
            <label for="Pic1">Natura</label>
            <img id="Pic3" src="https://cdn.pixabay.com/photo/2024/03/07/10/38/simba-8618301_640.jpg" alt="Zwierzęta"></img>
            <label for="Pic1">Zwierzęta</label>
        </div>
    </>
    );
}
export default Category;