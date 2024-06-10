import '../assets/Css/Home.css'
function Banner({image}){
    return <>
        <div className="image">
            <img src={image} alt=""  />
            <div className='text'>
                <p>DR. CEURACLE</p>
                <p>Discover Dr. Ceuracle’s Vegan Kombucha Line</p>
                <p>Vegan Product Line formulated with Kombucha Extract and Tea Complex to detoxify, refine dull looking skin , detoxify and provide deep hydration. </p>
            </div>
        </div>
    </>
}
export default Banner;