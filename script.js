$(".start").click(function() {
    $(".begin").hide(function() {
    $(".wave1").show();
    });
});

$(".redword").click(function() {
    $(".dumb").text("That wasn't even a box. Read it again. Carefully. ");
});

$(".blue").click(function() {
    $(".blue").text("I said red not blue.");
    $(".blue").css("background-color", "white");
    
});

$(".green").click(function() {
    $(".green").text("It is right there.");
    $(".green").css("background-color", "white");
});

$(".red").click(function() {
    $(".wave1").hide(function() {
    $(".wave2").show();
    });
});

$(".yellow").click(function() {
    $(".yellow").text("I even colored the word!");
    $(".yellow").css("background-color", "white");
});


$(".right").dblclick(function() {
    $(".delay").html("Please wait a moment. System failure. Rebooting...");
    $(".wave2").delay(5000).hide(function() {
    $(".wave3").show();
    });
});

$(".one").mouseenter(function() {
    $(".one").css("background-color", "white");
});

$(".one").mouseleave(function() {
    $(".one").css("background-color", "blue");
});

$(".two").mouseenter(function() {
    $(".two").css("background-color", "white");
});

$(".two").mouseleave(function() {
    $(".two").css("background-color", "lightblue");
});

$(".three").mouseenter(function() {
    $(".three").css("background-color", "white");
});

$(".three").mouseleave(function() {
    $(".three").css("background-color", "teal");
});

$(".four").mouseenter(function() {
    $(".four").css("background-color", "white");
});

$(".four").mouseleave(function() {
    $(".four").css("background-color", "aqua");
});

$(".last").dblclick(function() {
    $(".wave3").hide(function() {
    $(".wave4").show();
    });
});

$(".doom").click(function() {
    $(".wave4").hide(function() {
    $(".doomgloom").show();
    });
});

$(".onlychoice").click(function() {
    $(".wave4").show(function() {
    $(".doomgloom").hide();
    });
});

$(".cant").click(function() {
    $("h6").text("The system failure must have messed up our 'no' button. I guess you only have one choice now.");
});

$(".finish").click(function() {
    $(".wave4").hide();
    $("body").css("background-color", "black");
    $(".lightswitch").show();
});

$(".lightswitch").click(function() {
    $(".lightswitch").delay(500).fadeOut(function() {
    $("body").css("background-color", "white");
    $(".finishmood").delay(2000).show();
    });
});

$(".getnecked").click(function() {
    $(".getnecked").attr("src","https://www.property118.com/wp-content/uploads/2017/09/zero.jpg");
    $(".explanation").text("Hah. Get necked. This was the actual treasure. Okay. My work here is done.");
    $(".explanation").css("background-color", "yellow");
    $(".explanation").css("color", "blue");
});

$(".playagain").click(function() {
    $(".begin").show(function() {
    $(".finishmood").hide();
    });
});