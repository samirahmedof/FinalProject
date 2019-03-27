$(document).ready(function () {
    var say=0;
    $("table tr .eminem").click(function(){
        say++;
        if (say%2==0)
        $(".au1").trigger('play');
        else
        $(".au1").trigger('pause');

    })
    

})