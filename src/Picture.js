import './Picture.css';

function Picture(props){
    return(
        <>
            <img src={props.src}></img>
        </>
    );
}
export default Picture;