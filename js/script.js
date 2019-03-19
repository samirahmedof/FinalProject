$(document).ready(function () {

        $(window).scroll(function (e) {
                if ($(this).scrollTop() > 100) {
                        $("header").addClass("scrolled");
                }
                else {
                        $("header").removeClass("scrolled");
                }
        });

        $(".iDrop").hover(function () {
                $(this).children(".iDown").fadeToggle(400);
        });

        $(".iSubDrop").hover(function () {
                $(this).children(".iSub").fadeToggle(400);
        });

        // sign in
        $(".sign .enter").click(function () {
                $("header .registration").removeClass("d-none");
                $(".registration .iSigning").removeClass("d-none");
        })
        $(".sign-in .sign span.iBtn").click(function () {
                $(this).parent(".sign-in").addClass("d-none");
                $(".iRegistration").removeClass("d-none");
        })
        $("header .sign-in .fa-times").click(function () {
                if (!($(".iSigning").hasClass("d-none"))) {
                        $(".iSigning").addClass("d-none");
                }

                if (!($(".iRegistration").hasClass("d-none"))) {
                        $(".iRegistration").addClass("d-none");
                }


                $(".registration").addClass("d-none");
        })

        $(".iSelect select").click(function () {
                if ($(this).val() == 1) {
                        $(".metrolar").removeClass("d-none");
                        if (!($(".rayonlar").hasClass("d-none"))) {
                                $(".rayonlar").addClass("d-none")
                        }

                }
                else if ($(this).val() == 2) {
                        $(".rayonlar").removeClass("d-none");
                        if (!($(".metrolar").hasClass("d-none"))) {
                                $(".metrolar").addClass("d-none")
                        }
                }
        })

        $("select.kombat").on('change', function () {
                if (this.value == 3) {
                        $(".sport-type").removeClass("d-none");
                }
                else {
                        if (!($(".sport-type").hasClass("d-none"))) {
                                $(".sport-type").addClass("d-none");
                        }
                }
        });

        $("#mainHealth .iTilt").hover(function () {
                $(this).parent().addClass("activeHover");
                $("body").addClass("bodyBg")
        }, function () {
                $(this).parent().removeClass("activeHover");
                $("body").removeClass("bodyBg")
        })

})