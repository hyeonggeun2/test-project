//<![CDATA[
    $(document).ready(function(){
        $(".menu-item li").hide();
        $(".active").next("li").show();
        
        $(".menu-item").click(function() {
            $(this).next("li").slideToggle("fast")
                    .siblings("ul:visible").slideUp("fast");
            $(this).toggleClass("active")
                    .siblings("h3").removeClass("active");
            });
    });
    //]]>