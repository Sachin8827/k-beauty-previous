import RenderImage from './RenderImage';
import testmonialData from '../utils/constant/testmonialData';
function Testimonials(){
    return<>
        <div className="testimonials">
            <p className="t-head">Read Now</p>
            <p style={{ marginTop : '1.5rem'}}>ON THE KULT BLOG</p>
            <div className="t-box">
                {testmonialData.map((item, index) =><div className='t-body' key={index}>
                    <RenderImage classOfDiv="t-image-box" classOfImage="t-image" imageName={require(`../assets/images/${item.image}`)}/>
                    <p className='t-heading'>{item.heading}</p>
                    <p className='t-content'>{item.content}</p>
                    <a href="" className='readmore'>Read more</a>
                </div>)}
            </div>
            <input type="submit" className='viewAllButton' value="VIEW ALL PRODUCTS" />
        </div>
    </>
}
export default Testimonials;