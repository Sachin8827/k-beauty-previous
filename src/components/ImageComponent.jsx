function Image({image, imageClass}){
    return<>
        <div className={imageClass}>
            <img src={image}/>
        </div>
    </>
}
export default Image;