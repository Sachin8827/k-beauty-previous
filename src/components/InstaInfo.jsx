import data from '../utils/constant/data'
import RenderImage from './RenderImage';
function InstaInfo(){
    return<>
        <div className="insta-content">
            <p>FOLLOW OUR JOURNEY</p>
            <p>@KBEAUTYARABIA</p>
            <div className="i-products">
                {data.map((item, index) =><RenderImage classOfDiv="i-product-box" classOfImage={index==3 ? "i-product-photo" :"i-product-image"}  imageName={require(`../assets/images/${item.image}`)} key={index}/>)}
            </div>
        </div>
    </>
}
export default InstaInfo;