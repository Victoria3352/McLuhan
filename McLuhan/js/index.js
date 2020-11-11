window.onload = function(){
    var count = 0
    $('.click').mousedown(function(){
        $('body').css("backgroundColor","#fff")
        $('html').css("backgroundColor","#fff")
    })
    $('.click').mouseup(function(){
        $(this).hide()
        $('.content').show()
        $('html').css("backgroundColor","rgba(66, 39, 71, 1)")
        $('body').css("backgroundColor","rgba(66, 39, 71, 1)")

    })
    $('.button').click(function(){
        if(!count){
            $('body').css("backgroundColor","#000")
            $('html').css("backgroundColor","#000")
            count = 1
        }   
        else{
            $('body').css("backgroundColor","rgba(66, 39, 71, 1)")
            $('html').css("backgroundColor","rgba(66, 39, 71, 1)")
            count = 0
        }
    })
    $('.content p').hover(function(){
        if(this === $('.content p')[0]){
            $(this).css('color','red')
        }else if(this === $('.content p')[1]){
            $(this).css('color','#85D45B')  
        }else if(this === $('.content p')[2]){
            $(this).css('color','#53A3A9')  
        }else if(this === $('.content p')[3]){
            $(this).css('color','#DF97A7')  
        }else if(this === $('.content p')[4]){
            $(this).css('color','#E8D76D')  
        }else if(this === $('.content p')[5]){
            $(this).css('color','#F59464')  
        }else if(this === $('.content p')[6]){
            $(this).css('color','#21BBD9')  
        }else if(this === $('.content p')[7]){
            $(this).css('color','#5B5BE9')  
        }else if(this === $('.content p')[8]){
            $(this).css('color','#DDCB2D')  
        }else if(this === $('.content p')[9]){
            $(this).css('color','#85D45B')  
        }else if(this === $('.content p')[10]){
            $(this).css('color','#53A3A9')  
        }else if(this === $('.content p')[11]){
            $(this).css('color','#DF97A7')  
        }else if(this === $('.content p')[12]){
            $(this).css('color','#E8D76D')  
        }else if(this === $('.content p')[13]){
            $(this).css('color','#F59464')  
        }else if(this === $('.content p')[14]){
            $(this).css('color','#21BBD9')  
        }else if(this === $('.content p')[15]){
            $(this).css('color','#5B5BE9')  
        }else if(this === $('.content p')[16]){
            $(this).css('color','#DDCB2D')  
        }else if(this === $('.content p')[17]){
            $(this).css('color','#85D45B')  
        }else if(this === $('.content p')[18]){
            $(this).css('color','#53A3A9')  
        }else if(this === $('.content p')[19]){
            $(this).css('color','#DF97A7')  
        }else if(this === $('.content p')[20]){
            $(this).css('color','#FD0408') 
        } else if(this === $('.content p')[21]){
            $(this).css('color','#06F622') 
        } else if(this === $('.content p')[22]){
            $(this).css('color','#FD04D3') 
        } 
    },function(){
        $(this).css('color','#fff')
    })
}