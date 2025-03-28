import './Picture.css';

function Picture(props){
    return(
        <>
            <button>X</button>
            <img src={props.src}></img>
        </>
    );
}
export default Picture;