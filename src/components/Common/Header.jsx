import '../../assets/Css/Header.css'
import logo from '../../assets/images/79abacfe7487bea00e2b56129976d472.png'
function Header(){
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
            <p className='hoverOnCategory'>SHOP ALL</p>
            <p className='hoverOnCategory'>NEW</p>
            <p className='hoverOnCategory'>BRANDS</p>
            <p className='hoverOnCategory'>VALUE SETS</p>
            <p className='hoverOnCategory'>BLOG</p>
          </div>
        </div>
        <hr style={{position: "relative",zIndex : "1", color : '#E2E2E2'}}/>
    </>
}
export default Header;