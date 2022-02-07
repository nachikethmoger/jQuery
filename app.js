// manipulating styles
// $("h1").css("color", "red");
// console.log($("h1").css("font-size"));

// we can add class remove and checkif it has class or not

// manipulatring text with jquery    
// $("h1").text("bye");


//manipulating attributes


// adding event listeners
$("h1").click(function() {
    $("h1").css("color", "purple");
});

$("button").click(function() {
    $("h1").css("color", "red");
});

$("input").keypress(function(event) {
    console.log(event.key);
});



// by using prefend() append() Before() after() we can add and remove elements

// animate using jquery
// we use always stick it to values
$("button").click(function() {
    $("h1").slidUp().slideDown().animate({ opacity: 0.5 });
});