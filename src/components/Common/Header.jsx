import { useLocation } from 'react-router-dom';
import '../../assets/Css/Header.css'
import logo from '../../assets/images/79abacfe7487bea00e2b56129976d472.png'
function Header({className}){
  const location = useLocation()
  console.log(location.pathname)
    return <>
        
        <div className='brand-content'>
          <div className='brand-name'>
            <img src={logo} className='logo' />
          </div>
          <div className='icons'>
            <i className='fa-regular fa-user'></i>
            <i className='fa-solid fa-magnifying-glass'></i>
            <i className='fa-regular fa-heart'></i>
            <i className='fa-solid fa-bucket'></i>
          </div>
        </div>
        <div className='categories'>
          <div className='option'>
            <p className={location.pathname=='/' ? "hoverForCategory " : "hoverOnCategory"}>SHOP ALL</p>
            <p className={location.pathname=='/' ? "hoverForCategory " : "hoverOnCategory"}>NEW</p>
            <p className={location.pathname=='/' ? "hoverForCategory " : "hoverOnCategory"}>BRANDS</p>
            <p className={location.pathname=='/' ? "hoverForCategory " : "hoverOnCategory"}>VALUE SETS</p>
            <p className={location.pathname=='/' ? "hoverForCategory " : "hoverOnCategory"}>BLOG</p>
          </div>
        </div>
        <hr className={location.pathname=='/' ? "forHome" : "forLogin"}/>
    </>
}
export default Header;