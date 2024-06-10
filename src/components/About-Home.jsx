import Content from './Content'
import Image from './ImageComponent';
import img from '../assets/images/image.png'
import img2 from '../assets/images/image2nd.png'
function AboutHome(){
    return<>
        <div className="row">
            <Content heading="INSTREE" subHeading="SUN PROTECTION MADE SIMPLE" text="Isntree’s range of broad spectrum sun protection products are lightweight and suitable for daily use. Not only do they help control skin shine, but also keep skin feeling cool and comfortable. These suncreens also contain hyaluronic acid which helps deliver deep hydration and strengthen the skin’s moisture barrier. Available in a variety of formulations to suit every skin type. " buttonValue="Find Out More"/>
            <Image image={img} imageClass="img"/>
            <Image image={img2} imageClass ="img2" />
            <Content heading="HARUHARU WONDER" subHeading="FOR THAT ‘GLOW FROM WITHIN’ " text="Wondering how to achieve that radiant, healthy looking  ‘glass skin’? Say hello to HaruHaru Wonder’s popular Black Rice Hyaluronic Toner. A multi-purpose essence and toner that uses a patented Ultra Deep Technology to deliver skin nourishing ingredients within the skin’s layers to reveal deeply hydrated skin and nourished skin. Bonus- It is Vegan, cruelty free and contains 95% natural ingredients!  " buttonValue="Find Out More"/>
        </div>
    </>
}
export default AboutHome;