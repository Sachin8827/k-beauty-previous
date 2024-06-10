
import banner from "../assets/images/af25199bb24d1027ff85047da9c4783b.jpeg"
import ImageComponent from "../components/Image";
import AboutHome from "../components/About-Home";
import ViewProducts from "../components/ViewProducts";
import Testimonials from "../components/Testimonials";
import InstaInfo from "../components/InstaInfo";
import data from "../utils/constant/data";
function HomePage(){
    return <>
    <div className="container">
        <ImageComponent image={banner}/>
        <AboutHome />
        <ViewProducts data={data} heading="BEST SELLERS" className={"row-products"} />
        <Testimonials/>
        <InstaInfo/>
        
    </div>
    </>
}
export default HomePage;