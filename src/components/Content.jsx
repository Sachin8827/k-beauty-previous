function Content({heading, subHeading, text, buttonValue}){
    return<>
        <div className="content">
            <p>{heading}</p>
            <p>{subHeading}</p>
            <p>{text}</p>
            <button className="btn">{buttonValue}</button>
        </div>
    </>
}
export default Content;