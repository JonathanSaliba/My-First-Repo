
$('.tab').on("click", function(){
    var isTab1=$(this).hasClass("tab1");
    var isTab2=$(this).hasClass("tab2");

    if(isTab1){
        $(".tab1").addClass("active");
        $(".tab2").removeClass("active");
        $("#tabContent1").css("display", "block");
        $("#tabContent2").css("display", "none");
    }

    else if(isTab2) {
        $(".tab2").addClass("active");
        $(".tab1").removeClass("active");
        $("#tabContent2").css("display", "block");
        $("#tabContent1").css("display", "none");
    }
});
