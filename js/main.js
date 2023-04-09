$(document).ready(function () {
    $(".burger").click(function (e) { 
        e.preventDefault();
        $(".burger").toggleClass("active")
        $(".nav").toggleClass("active")
        $("body").toggleClass("hidden")
    });
});