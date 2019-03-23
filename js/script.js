$(document).ready(function () {

        //-----------------Preloader-----------------//
        $(window).on('load', function () {
                $('#loader').fadeOut('slow');
                $(window).scrollTop(0);
        });
        //----------------------------------//


        //-----------------Daxilolma-----------------//
        $(".sign .enter").click(function () { //daxilolma button'u
                $("header .registration").removeClass("d-none");
                $(".registration .iSigning").removeClass("d-none");
        })

        $(".sign-in .sign span.iBtn").click(function () { //qeydiyyat hissesine kechmek
                $(this).parent(".sign-in").addClass("d-none");
                $(".iRegistration").removeClass("d-none");
        })

        $("header .sign-in .fa-times").click(function () { //dialoqu baglamaq
                if (!($(".iSigning").hasClass("d-none"))) {
                        $(".iSigning").addClass("d-none");
                }
                if (!($(".iRegistration").hasClass("d-none"))) {
                        $(".iRegistration").addClass("d-none");
                }
                $(".registration").addClass("d-none");
        })

        $("header .iSigning a.iBtn").click(function () { //istifadechi profilinin gorunmesi
                if (!($(".iSigning").hasClass("d-none"))) {
                        $(".iSigning").addClass("d-none");
                }
                $(".registration").addClass("d-none");

                $("header .container li.sign").addClass("d-none");
                $("header .container li.profile").removeClass("d-none");
        })

        $('.iReg').foxholder({ //form
                placeholderDemo: 11
        });
        //----------------------------------//


        //----------------Istifadechi melumati------------------//       
        $(document).click(function (e) { //sehifeye klikleyende melumatin baglanmasi
                if (!$(e.target).closest("header .userDrop .fas").length && (!($("header .userDrop .userDown").hasClass("d-none")))) {
                        $("header .userDrop .userDown").addClass("d-none");
                }
        });

        $("header .userDrop .fas").click(function () { //icona klikleyende melumatin achilmasi
                if ($("header .userDrop .userDown").hasClass("d-none")) {
                        $("header .userDrop .userDown").removeClass("d-none");
                }
                else {
                        $("header .userDrop .userDown").addClass("d-none");
                }
        })
        //----------------------------------//   
        
})