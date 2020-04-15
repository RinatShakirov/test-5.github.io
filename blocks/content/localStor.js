class Localstoreg{

    constructor(){

    }

    getlocalStorage(){

        let items = localStorage.getItem('items');

        if(items !== null){
            return JSON.parse(items);
        }
        else{
            return [];
        }

    }

    getlocalPries(){
        let preises = localStorage.getItem('preis');
        if(preises !== null){
            return JSON.parse(preises);
        }
        else{
            return [];
        }
    }

    setlocalStoreg(id,preis){

        let getItems = this.getlocalStorage();
        let getPreis = this.getlocalPries();

        let searchItms = getItems.indexOf(id);
        let searchPreis = getPreis.indexOf(preis);
 

        let checked = false;
        

        if(searchItms === -1 || searchPreis === -1){
            getItems.push(id);
            getPreis.push(preis);
            checked = true;
        }
        else{
            getItems.splice(searchItms,1);
            getPreis.splice(searchPreis,1);
        }

        
        localStorage.setItem('items', JSON.stringify(getItems));
        localStorage.setItem('preis', JSON.stringify(getPreis));
        
        return {checked, getItems,getPreis};
    }
}

let locSt = new Localstoreg();
