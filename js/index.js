$(document).ready(function(){
    $(".mob_pan").click(function(){
        $(".menu").animate({height: 'toggle'});
    })
    $(".blank_btn").click(function(){
        alert("Спасибо за вашу заявку " + $(".name").val() + ". Мы позваним вам в ближайщее время");
    })
});