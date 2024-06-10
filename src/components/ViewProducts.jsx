
import { useNavigate } from "react-router-dom";
import Rating from "./Common/Rating";
import RenderImage from "./RenderImage";
function ViewProducts({data, heading, className}) {
  const navigate = useNavigate();
  return (
    <>
      <div className={className}>
        <center>
          <p>{heading}</p>
        </center>
        {data.map((item, index) => (
          <div className='product' key={index} onClick ={() =>navigate(`/productdetail/${index+1}`)}>
            <RenderImage
              classOfDiv='imgOfProduct'
              imageName={require(`../assets/images/${item.image}`)}
              alt='name'
              classOfImage={index == 3 ? "overWidth" : "singleProduct"}
            />
            <p className='product-name'>{item.name}</p>
            <div className='star'>
              <Rating value={item.star} />
            </div>
            <p className='price'> $ {item.price}</p>
          </div>
        ))}
        <button className='viewAllProduct' >VIEW ALL PRODUCTS</button>
      </div>
    </>
  );
}
export default ViewProducts;
