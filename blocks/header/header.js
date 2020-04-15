class Header{
    headerRender(itm,prs){
        let headerHtml = `
            <div class="header-wrapper">
                <div class="header-inner">
                    <div class="custom-care">
                        <span>Custom care:</span>
                        <a class="n" href="tel:888233345">888-23-3345</a>
                    </div>
                    <div class="my-account">
                        <div class="currency"><span>$US ▼</span></div>
                        <div class="account-wrapper"><img src="https://cdn4.iconfinder.com/data/icons/iconset-addictive-flavour/png/user.png" alt=""><p>My Account</p></div>
                        <div class="search-img"><img src="https://cdn4.iconfinder.com/data/icons/iphone_toolbar_icons/iphone_toolbar_icons/magnifyingglass.png" alt=""></div>
                    </div>
                </div>
            </div>
            <div class="logo-navigation">
                <div class="logo-navigation-wrapper">
                    <div class="toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div class="logo">
                        <img src="./images/imeges__menu/logo.png" alt="">
                    </div>
                    <div class="cart-nav">
                        <nav class="nav-wrapper">
                            <ul class="list">
                                <li class="li">new<span>▼</span></li>
                                <li class="li">designers<span>▼</span></li>
                                <li class="li">women<span>▼</span></li>
                                <li class="li">men<span>▼</span></li>
                                <li class="li">clearence<span>▼</span></li>
                            </ul>
                        </nav>
                        <div class="cart-menu-wrapp">
                            <div class="cart-colection">
                                <span>Your cart</span>
                                <span>▼</span>
                            </div>
                            <div class="items">
                                <div class="items-cart"><img src="./images/imeges__menu/bag.png" alt=""></div>
                                <div class="items-info">
                                    <p><span>${itm}</span>iTEMS</p>
                                    <p><span>$</span>${prs}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
        header.innerHTML = headerHtml;
    }
}

let summItms = locSt.getlocalStorage();
let summPreis = locSt.getlocalPries();

function summ(arr){
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        res += JSON.parse(arr[i]);
    }
    return res.toFixed(2);
}

let renderingHeader = new Header();
renderingHeader.headerRender(summItms.length,summ(summPreis));