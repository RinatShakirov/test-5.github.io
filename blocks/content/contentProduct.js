class ProductRender{

    getDataAttr(){

        let dataPreis,
            dataName,
            dataColor,
            datatSize,
            dataImg,
            dataSizestr,
            dataimgAll,
            dataColorstr,
            dataimgAllstr,
            check = false,
            itms = document.querySelectorAll('.item-wrapper'),
            itmIformRender = '';

        for(let itm of itms){
            itm.addEventListener('click', function(){
                console.log(this.dataset.imgall)
                dataPreis = this.dataset.preis;
                dataName = this.dataset.name;
                dataColor = this.dataset.color;
                dataImg = this.dataset.img;
                datatSize = this.dataset.size;
                dataimgAll = this.dataset.imgall;
                
                dataSizestr = datatSize.split(',');
                dataColorstr = dataColor.split(',');
                dataimgAllstr = dataimgAll.split(',');

                itmIformRender = `
                <div class="product-wrapper">
                            <div class="img-prod">
                                <div max-img><img src="./images/imeges__menu/${dataImg}" alt=""></div>
                                <div class="mini-img">
                                    <img src="./images/smallImg/${dataimgAllstr[0]}" alt="">
                                    <img src="./images/smallImg/${dataimgAllstr[0]}" alt="">
                                    <img src="./images/smallImg/${dataimgAllstr[0]}" alt="">
                                    <img src="./images/smallImg/${dataimgAllstr[0]}" alt="">
                                </div>
                            </div>
                            <div class="prod-info">
                                <div class="nav-back">
                                    <img src="./images/imeges__menu/sl-btn-left.png" alt="">
                                    <p>Back to</p>
                                    <span>Women's Clothing</span>
                                </div>
                                <div class="prod-name"><p>${dataName}</p></div>
                                <div class="preis-reviews">
                                    <div class="preis"><span>$</span><p data-preis="preis">${dataPreis}</p></div>
                                    <div class="reviews">
                                        <p data-reviews="reviews">12<span>reviews</span></p>
                                        <div class="rev-wrapp">
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                            <span></span>
                                        </div>
                                    </div>
                                </div>
                                <div class="general-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati quisquam, sapiente dolorem molestias fugiat magni facilis quasi debitis distinctio necessitatibus inventore odit veniam, esse dolorum suscipit, corrupti aliquid nostrum!</p></div>
                                <div class="size-color">
                                    <div class="size-option">
                                        <select name="size" id="">
                                            <option value="0">Select size</option>
                                            <option value="${dataSizestr[0]}">${dataSizestr[0]}</option>
                                            <option value="${dataSizestr[1]}">${dataSizestr[1]}</option>
                                            <option value="${dataSizestr[2]}">${dataSizestr[2]}</option>
                                            <option value="${dataSizestr[3]}">${dataSizestr[3]}</option>
                                            <option value="${dataSizestr[4]}">${dataSizestr[4]}</option>
                                        </select>
                                    </div>
                                    <div class="color-option">
                                        <div class="color" style="background:${dataColorstr[0]}"></div>
                                        <div class="color" style="background:${dataColorstr[1]}"></div>
                                        <div class="color" style="background:${dataColorstr[2]}"></div>
                                        <div class="color" style="background:${dataColorstr[3]}"></div>
                                        <div class="color" ></div>
                                    </div>
                                </div>
                                <div class="total-wrapp">
                                    <div class="btn-total">
                                    <span class="btn-left plus">+</span>
                                    <span class="zahl">0</span>
                                    <span class="btn-right minus">+</span>
                                    </div>
                                    <div class="add-cart-btn">
                                        <p>ADD TO CART</p><span>+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                `;
                product.innerHTML = itmIformRender;
            })
        }
    }

    showProduct(){
        let itmIformRender = '';
        itmIformRender = `
        <div class="product-wrapper">
                    <div class="img-prod">
                        <div max-img><img src="./images/images__product/Layer_30.png" alt=""></div>
                        <div class="mini-img">
                            <img src="./images/images__product/Layer_30_copy.png" alt="">
                            <img src="./images/images__product/Layer_31.png" alt="">
                            <img src="./images/images__product/Layer_32.png" alt="">
                            <img src="./images/images__product/Layer_33.png" alt="">
                        </div>
                    </div>
                    <div class="prod-info">
                        <div class="nav-back">
                            <img src="./images/imeges__menu/sl-btn-left.png" alt="">
                            <p>Back to</p>
                            <span>Women's Clothing</span>
                        </div>
                        <div class="prod-name"><p>Lusina Dress</p></div>
                        <div class="preis-reviews">
                            <div class="preis"><span>$</span><p data-preis="preis">86.32</p></div>
                            <div class="reviews">
                                <p data-reviews="reviews">12<span>reviews</span></p>
                                <div class="rev-wrapp">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="general-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati quisquam, sapiente dolorem molestias fugiat magni facilis quasi debitis distinctio necessitatibus inventore odit veniam, esse dolorum suscipit, corrupti aliquid nostrum!</p></div>
                        <div class="size-color">
                            <div class="size-option">
                                <select name="size" id="">
                                    <option value="10">Select size</option>
                                    <option value="20">20</option>
                                    <option value="30">30</option>
                                    <option value="30">30</option>
                                </select>
                            </div>
                            <div class="color-option">
                                <div class="color"></div>
                                <div class="color"></div>
                                <div class="color"></div>
                                <div class="color"></div>
                                <div class="color"></div>
                            </div>
                        </div>
                        <div class="total-wrapp">
                            <div class="btn-total">
                            <span class="btn-left plus">+</span>
                            <span class="zahl">0</span>
                            <span class="btn-right minus">+</span>
                            </div>
                            <div class="add-cart-btn">
                                <p>ADD TO CART</p><span>+</span>
                            </div>
                        </div>
                    </div>
                </div>
        `;
        product.innerHTML = itmIformRender;
        // window.open('./product.html');
    }
}

let renderProd = new ProductRender();
renderProd.showProduct();
renderProd.getDataAttr()


