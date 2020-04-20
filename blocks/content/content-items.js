class Items{
    constructor(){

        this.addInCart = 'Remove';
        this.backFromCart = 'Add';
        this.btnActive = 'active-btn';

    }

    inCart(elem,id,preis){
        
        let {checked, getItems, getPreis} = locSt.setlocalStoreg(id,preis);

        if(checked){
            elem.innerHTML = this.addInCart;
            elem.classList.add(this.btnActive);
        }
        else{
            elem.innerHTML = this.backFromCart;
            elem.classList.remove(this.btnActive);
        }

        event.stopPropagation();
        // new Toppreiss().renderTopPreis(checked);
        renderingHeader.headerRender(getItems.length,summ(getPreis));
    }

    itemsRender(){
        
        let getLoc =  locSt.getlocalStorage()
        
        let itemsHtml = ' ';

        ITEMS.forEach(({id, name, preis, img, cat, size, date,color}) => {

            let actuText = '';
            let checkBtn = '';
            

            if(getLoc.indexOf(id) === -1){
                actuText = this.backFromCart;
            }
            else{
                actuText = this.addInCart;
                checkBtn = this.btnActive;
            }

            itemsHtml += `
                <div class="item-wrapper" data-img="${img}" data-preis="${preis}" data-size="${size}" data-name="${name}" data-color="${color}">
                    <div class="item-img"><img src="./images/imeges__menu/${img}" alt=""></div>
                    <div class="info">
                        <p>${name}</p>
                        <p><span>$</span>${preis}</p>
                        <button class="item-btn ${checkBtn}" onclick="newItem.inCart(this,'${id}','${preis}');">${actuText}</button>
                    </div>
                </div>
            `;

            itemsOut.innerHTML = itemsHtml;
        });
    };
};

class Toppreiss extends Items{

    renderTopPreis(){
        let topPreis = '';
        let getLoc =  locSt.getlocalStorage()

        function num(max=11,min=0){
            return Math.floor(Math.random()*((max + min) + 1));
        }
        
        function arrPush(arr){
            let b = [];
            for(let i = 0; i < 4; i++){
                b.push(arr[num()]);
            }
            const newArray = b.filter(function(item,position){
                return position === b.indexOf(item);
            });
            return newArray;
        }
        
        arrPush(ITEMS).forEach(({id, name, preis, img, cat, size, date,color})=>{

            let actuText = '';
            let checkBtn = '';

            if(getLoc.indexOf(id) === -1){
                actuText = this.backFromCart;
            }
            else{
                actuText = this.addInCart;
                checkBtn = this.btnActive;
            }
            
            topPreis += `
                <div class="item-wrapper" data-img="${img}" data-preis="${preis}" data-size="${size}" data-name="${name}" data-color="${color}">
                    <div class="item-img"><img src="./images/imeges__menu/${img}" alt=""></div>
                    <div class="info">
                        <p>${name}</p>
                        <p><span>$</span>${preis}</p>
                        <button class="item-btn ${checkBtn}" onclick="newItem.inCart(this,'${id}','${preis}')">${actuText}</button>
                    </div>
                </div>
            `;
            itemsTop.innerHTML = topPreis;
        });
    };
};
let newItem = new Items();
newItem.itemsRender();


let topPreis = new Toppreiss();
topPreis.renderTopPreis();



// function load(){

//         fetch('scripts/items.json')
//         .then(res => res.json())
//         .then(body => {
//             ITEMS = body; 
//         })
//         .catch(error => {
//             console.log(error)
//         });
// }