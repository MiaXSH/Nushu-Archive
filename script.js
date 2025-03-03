// document.querySelectorAll(".tick").forEach(tick =>{
//     tick.addEventListener("click", function(){
//         this.classList.toggle("active");
//         adjustTicks();
//     });
// });


// $(".tick").click(function(){
//     $(this).toggleClass("active");
// });


function updateWidth (){
    var activeTicks = $(".tick.active").length;
    if (activeTicks > 1) {
        $(".TimeLine-line").css("width", "710vw");
        $(".Gradient-Overlay").css("width", "710vw");
        $("#blackbackground").css("width", "710vw");
    }else {
        $(".TimeLine-line").css("width", "390vw");
        $(".Gradient-Overlay").css("width", "390vw");
        $("#blackbackground").css("width", "390vw");
    }
}


 $(".tick").click(function(){
     $(this).toggleClass("active");


     if($(".tick.active").length > 0) {
         $("#blackbackground").addClass("active");
        //  $("body").css("overflow-y","auto");
     }else{
         $("#blackbackground").removeClass("active");
        //  $("body").css("overflow-y", "hidden");
     }
     updateWidth();
 });
 updateWidth();



