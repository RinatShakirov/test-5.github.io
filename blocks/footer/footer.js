class Footer{
    constructor(){

    }

    footerRender(){
        let footerHtml = '';

        footerHtml = `
        <div class="footer-pay">
            <p>We accept</p>
            <img src="./images/imeges__menu/pay.png" alt="">
        </div>
        <div class="footer-service">
            <div class="footer-service-wrapp">
                <div class="service">
                    <h1>Customer Service</h1>
                    <a href="#">Contact</a>
                    <a href="#">FAQ</a>
                    <a href="#">Terms of payment</a>
                    <a href="#">Terms of sale</a>
                    <a href="#">Delivery terms and conditions</a>
                    <a href="#">Returns and Refunds</a>
                </div>
                <div class="information">
                    <h1>Information</h1>
                    <a href="#">Affiliate</a>
                    <a href="#">Cookies</a>
                    <a href="#">How to Shop</a>
                    <a href="#">About Nelly</a>
                    <a href="#">Investor relations</a>
                </div>
                <div class="campaigns">
                    <h1>Campaigns</h1>
                    <a href="#">Evening dresses</a>
                    <a href="#">Makeup</a>
                    <a href="#">Fashion forward</a>
                    <a href="#">training clothes</a>
                    <a href="#">Special Occasion Dresses</a>
                </div>
                <div class="stores">
                    <h1>Stores</h1>
                    <a href="#">Paris</a>
                    <a href="#">New York</a>
                    <a href="#">Madrid</a>
                    <a href="#">Tokio</a>
                </div>
                <div class="social">
                    <h1>Social</h1>
                    <div class="soc">
                        <div class="soc-s">
                            <a href="#"><img src="./images/imeges__menu/vii.png" alt=""></a>
                            <a href="#"><img src="./images/imeges__menu/twitter.png" alt=""></a>
                            <a href="#"><img src="./images/imeges__menu/trw.png" alt=""></a>
                            <a href="#"><img src="./images/imeges__menu/pal.png" alt=""></a>
                            <a href="#"><img src="./images/imeges__menu/facebook.png" alt=""></a>
                            <a href="#"><img src="./images/imeges__menu/google.png" alt=""></a>
                        </div>
                        <div class="stamp">
                            <img src="./images/imeges__menu/top.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-privacy">
            <div class="privacy-wrapper">
                <div class="privacy-btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav class="privacy">
                    <a href="#">Privacy & Cookies</a>
                    <a href="#">Terms & Conditions</a>
                    <a href="#">Accessibility</a>
                    <a href="#">Store Directory</a>
                    <a href="#">About Us</a>
                </nav>
                <div class="link-web">
                    <p>&copy; LookShop.com</p>
                    <p>All Rights Reserved</p>
                </div>
            </div>
        </div>
        `;

        footer.innerHTML = footerHtml;
    }
}
let renderingFooter = new Footer();
renderingFooter.footerRender();