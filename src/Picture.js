import './Picture.css';

function Picture(props){
    return(
        <>
            <button className='close'>X</button>
            <img src={props.src}></img>
        </>
    );
}
export default Picture;