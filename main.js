

$(document).ready(function () {

    $("div").hover(function () {
        $("div").animate({
            'margin-left': "0px",
             })


    }, function () {

       
        $("div").animate({
            'margin-left': "-100px",
             })

    })

    $("h3").click(function () {

        $("ul").slideUp()
        $(this).next().slideDown(1000)

        
        

    })


});







