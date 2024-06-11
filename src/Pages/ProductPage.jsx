import { useParams } from "react-router-dom";
import "../assets/Css/ProductPage.css";
import ProductDetail from "../components/ProductDetail";
import ViewProducts from "../components/ViewProducts";
import productData from "../utils/constant/data";

function ProductPage() {

  return (
    <>
      <ProductDetail id={useParams().id}/>
      <ViewProducts data={productData.slice(0, 4)} heading="YOU MAY ALSO LIKE" className={"product-list"}/>
      <hr style={{marginBottom:'1.5rem', border: "1px solid #E2E2E2"}}/>
      <ViewProducts data={productData.slice(0, 4)} heading="RECENTLY VIEWED PRODUCTS" className={"product-list"}/>
    </>
  );
}
export default ProductPage;
