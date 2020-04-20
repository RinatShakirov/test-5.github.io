class ProductRender{

    getDataAttr(){

        let dataPreis,
            dataName,
            dataColor,
            datatSize,
            dataImg,
            check = false,
            itms = document.querySelectorAll('.item-wrapper'),
            itmIformRender = '';

        for(let itm of itms){
            itm.addEventListener('click', function(){
               
                dataPreis = this.dataset.preis;
                dataName = this.dataset.name;
                dataColor = this.dataset.color;
                datatSize = this.dataset.size;
                dataImg = this.dataset.img;

                itmIformRender = `
                <div class="product-wrapper">
                            <div class="img-prod">
                                <div max-img><img src="./images/imeges__menu/${dataImg}" alt=""></div>
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
                                            <option value="">Select size</option>
                                            <option value="${datatSize[0]}">${datatSize[0]}</option>
                                            <option value="${datatSize[1]}">${datatSize[1]}</option>
                                            <option value="${datatSize[2]}">${datatSize[2]}</option>
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
            })
            // return {dataPreis,dataName,dataImg}
        }
        
    }

    showProduct(){

        // let {dataPreis,dataName,dataImg} = this.getDataAttr();

        // console.log(dataPreis)
        // let itmIformRender = '';

        // itmIformRender += `
        // <div class="product-wrapper">
        //             <div class="img-prod">
        //                 <div max-img><img src="./images/images__product/Layer_30.png" alt=""></div>
        //                 <div class="mini-img">
        //                     <img src="./images/images__product/Layer_30_copy.png" alt="">
        //                     <img src="./images/images__product/Layer_31.png" alt="">
        //                     <img src="./images/images__product/Layer_32.png" alt="">
        //                     <img src="./images/images__product/Layer_33.png" alt="">
        //                 </div>
        //             </div>
        //             <div class="prod-info">
        //                 <div class="nav-back">
        //                     <img src="./images/imeges__menu/sl-btn-left.png" alt="">
        //                     <p>Back to</p>
        //                     <span>Women's Clothing</span>
        //                 </div>
        //                 <div class="prod-name"><p>${dataName}</p></div>
        //                 <div class="preis-reviews">
        //                     <div class="preis"><span>$</span><p data-preis="preis">${dataPreis}</p></div>
        //                     <div class="reviews">
        //                         <p data-reviews="reviews">12<span>reviews</span></p>
        //                         <div class="rev-wrapp">
        //                             <span></span>
        //                             <span></span>
        //                             <span></span>
        //                             <span></span>
        //                             <span></span>
        //                         </div>
        //                     </div>
        //                 </div>
        //                 <div class="general-text"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque obcaecati quisquam, sapiente dolorem molestias fugiat magni facilis quasi debitis distinctio necessitatibus inventore odit veniam, esse dolorum suscipit, corrupti aliquid nostrum!</p></div>
        //                 <div class="size-color">
        //                     <div class="size-option">
        //                         <select name="size" id="">
        //                             <option value="10">Select size</option>
        //                             <option value="20">20</option>
        //                             <option value="30">30</option>
        //                             <option value="30">30</option>
        //                         </select>
        //                     </div>
        //                     <div class="color-option">
        //                         <div class="color"></div>
        //                         <div class="color"></div>
        //                         <div class="color"></div>
        //                         <div class="color"></div>
        //                         <div class="color"></div>
        //                     </div>
        //                 </div>
        //                 <div class="total-wrapp">
        //                     <div class="btn-total">
        //                     <span class="btn-left plus">+</span>
        //                     <span class="zahl">0</span>
        //                     <span class="btn-right minus">+</span>
        //                     </div>
        //                     <div class="add-cart-btn">
        //                         <p>ADD TO CART</p><span>+</span>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        // `;
        // product.innerHTML = itmIformRender;
        // window.open('./product.html');
    }
}

let renderProd = new ProductRender();
renderProd.showProduct();
renderProd.getDataAttr()


