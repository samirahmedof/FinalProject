$(document).ready(function () {

    //---------------Shekiller ucun plugin-------------------//
    $('.iPopup').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });
    //----------------------------------//

    
    //------------------Endirimden istifade etmek----------------//
    $("#moreInfo .sale .iBtn").click(function () {
        $("header .registration").removeClass("d-none");
        $(".registration .iPromo").removeClass("d-none");

        $("header .sign-in .fa-times").click(function () {
            if (!($(".iPromo").hasClass("d-none"))) {
                $(".iPromo").addClass("d-none");
            }

        })
    })
    //----------------------------------//

})