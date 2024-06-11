function Content({heading, subHeading, text, buttonValue, classname}){
    return<>
        <div className={`content ${classname}`}>
            <p>{heading}</p>
            <p>{subHeading}</p>
            <p>{text}</p>
            <button className="btn">{buttonValue}</button>
        </div>
    </>
}
export default Content;