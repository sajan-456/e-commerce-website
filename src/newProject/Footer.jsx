 import FLogo  from './assest/flogo.png'
 import ILogo  from './assest/ilogo.png'
 import TLogo  from './assest/tlogo.png'
 import inLogo from './assest/inlogo.png'
 
function Footer(){

   
    return(
         <>
          <footer>
            <div class="footers">
                <div class="log">
                    <h1>FASHION</h1>
                    <p>Complete your style with awesome Clothes from us.</p>
                    <img src={FLogo} alt=""/>
                    <img src={ILogo} alt=""/>
                    <img src={TLogo} alt=""/>
                    <img src={inLogo} alt=""/>

                </div>
                <div class="footerin">
                    <div class="info">
                    <h4>Company</h4>
                    <p>About</p>
                    <p>Contact us </p>
                    <p>Support</p> 
                    </div>
                     <div class="info">
                    <h4>Quick Link</h4>
                    <p>Share Location</p>
                    <p>Orders Tracking </p>
                    <p>Size Guide</p>
                    <p>FAQs</p> 
                    </div>
                     <div class="info">
                    <h4>Company</h4>
                    <p>Terms & conditions</p>
                    <p>Privacy Policy </p>
                    
                    </div>
                    
                </div>
            </div>
        </footer>
         </>
    )
}
export default Footer