$(function(){
    //Filter
    let filterOption = [];
    let optionValue = $('select');
    let itmDate = $('.item-wrapper');
    optionValue.on('change', function(){
        let selected = $(this).val();

        itmDate.each(function(){
            let date = $(this).data('date');
            
            if(date === selected || selected === 'data'){
                $(this).css('display','block');
                
            }
            else{
                $(this).css('display','none');
            }
        });
    });
    $('.filter-items h1').click(function(){
        $(this).nextAll('div').slideToggle();
    })
    $('ul div').click(function(){
        $(this).nextAll().slideToggle();
        $(this).children('span').toggleClass('plus-rotate');

        $(this).nextAll('li').on('click',function(){
            
            let category = $(this).data('category');
            let access = $(this).data('access');
            let shoes = $(this).data('shoes');

            itmDate.each(function(){
                let date = $(this).data('category');
                
                if(date === category){
                    $(this).css('display','block');
                    
                }
                else{
                    $(this).css('display','none');
                }
                // if(category === undefined || access === undefined || shoes === undefined){
                //     $('.slider-wrapper').html('Element wurde nicht gefunden');
                // }
                // else{
                //     $(this).css('display','block');
                // }
            });
        });
    });

    $('.btn').on('click', function(){

        let start = $('#range').val();

        $('.out').html(start);
        itmDate.each(function(){
            let date = $(this).data('preis');

            if(start >= date){
                $(this).css('display','block');
                
            }
            else{
                $(this).css('display','none');
            
            }
        });


        $('.fil-size').on('click',function(){
            let size = $(this).data('size');
            itmDate.each(function(){
                let date = $(this).data('size');
                
                if(date.indexOf(size) !== -1){
                    $(this).css('display','block');
                    
                }
                else{
                    $(this).css('display','none');
                
                }
            });
        });
    });
    //Filter END

    //product description and all
    $('.list-wrapper').on('click',function(){
        $(this).children('p').slideToggle();
        $(this).children('.cant').children('img').toggleClass('showed-active');
    })
    //END


    //Slider
    let owl = $('.sld-wrapp-wrapp').owlCarousel({
        items:1,
        dots:false,
        autoplay:true,
    });

    $('.left').click(function() {
        owl.trigger('next.owl.carousel');
    })
    
    $('.right').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    })
    
    let owl1 = $('.content-slider-wrapper').owlCarousel({
        items:1,
        dots:true,
        autoplay:true,
    });
    
    $('.left-1').click(function() {
        owl1.trigger('next.owl.carousel');
    })
    
    $('.right-1').click(function() {
        owl1.trigger('prev.owl.carousel', [300]);
    })
    //slider end

    //toggle menu
    $('.toggle').on('click', function(){
        $('body').addClass('body-scr-off');
        $('.nav-wrapper').addClass('menu-on').on('click',function(e){
            if(event.target.classList.contains('list') || event.target.classList.contains('li')){
                return false;
            }
            else{
                $(this).removeClass('menu-on');
                $('body').removeClass('body-scr-off');
            }
        });
    });
    //toggle menu end
});



window.addEventListener('load', ()=>{
    
    // function getDataAttr(){

    //     let dataAttrebuts = {};
        
    //     let itms = document.querySelectorAll('.item-wrapper')

    //     for(let itm of itms){
            
    //         itm.addEventListener('click', function(){
    //             console.log(this)
    //             let dataPreis = this.dataset.preis;
    //             let dataName = this.dataset.name;
    //             let dataImg = this.children[0].children[0].getAttribute('src')
               
    //             product.innerHTML
                
    //             console.log(product)
    //         })
            
    //     }
        
    // }

    



/////////////////////////////////////////////////////////////////////
    function sliderTest(a,b,c,e){
        const as = document.querySelector(`${a}`);
        const bs = document.querySelector(`${b}`);
        const cs = document.querySelector(`${c}`);
        let es   = e;
        let count = 0;
        bs.addEventListener('click', ()=>{
            count -= 235;
    
            if(count < -es){
                count = 0;
            }
            as.style.transform = `translateX(${count}px)`;
        })
        cs.addEventListener('click', ()=>{
            count += 235;
    
            if(count > 0){
                count = 0;
            }
            as.style.transform = `translateX(${count}px)`;
        })
    }
    sliderTest('.slider-wrapper','.arrow-left','.arrow-right',2585);
})