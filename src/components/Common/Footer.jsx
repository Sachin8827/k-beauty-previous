import '../../assets/Css/Footer.css'
import insta from '../../assets/images/instagram.svg'
import fb from '../../assets/images/facebook.svg'
import youtube from '../../assets/images/youtube.svg'
function Footer(){
    return<>
    <div className='footer'>
          <div className='footer-about'>
            <p>ABOUT THE SHOP</p>
            <p>
              Auguste The Label is a boutique Australianbrand dreamt up by Byron
              Bay nativeEbony Eagles.
            </p>

            <div className='social-media'>
              <img src={insta}/>
              <img src={fb}/>
              <img src={youtube}/>
            </div>
          </div>
          <div className='footer-customer'>
            <p>CUSTOMER CARE</p>
            <p>Contact us</p>
            <ul>
              <li>FAQ</li>
              <li>The KULT</li>
              <li>Beauty Dictionary</li>
              <li>Skincare 101</li>
              <li>Skin Konsult</li>
            </ul>
          </div>
          <div className='footer-about'>
            <p>ABOUT</p>
            <ul>
              <li>Our Story</li>
              <li>Kanvas Scoop</li>
              <li>Shipping and Returns</li>
              <li>Terms of Use</li>
              <li>Careers / Affliates </li>
            </ul>
          </div>
          <div className='footer-join'>
            <p>JOIN</p>
            <p>Join us and we'll love you forever</p>
            <input type='text' placeholder='Enter your email address' />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className='trademark'>
          <i className='fa-regular fa-copyright'></i>
          <p>&nbsp;&nbsp;Copy Right K-Beauty</p>
        </div>
    </>
}
export default Footer;