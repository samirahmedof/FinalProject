$(document).ready(function () {

    $('.iForm').foxholder({
            placeholderDemo: 9
    });

    var typed = new Typed('#typed', {
            stringsElement: '#typed-strings',
            backSpeed: 30,
            typeSpeed: 50,
            loop: true,
            loopCount: Infinity
    });

    $('.iReg').foxholder({
        placeholderDemo: 11
});

    $('.iTilt').universalTilt({
            settings: {
                    disabled: 'Y'
            },
            callbacks: {
                    // callbacks...
            }
    });

    
})