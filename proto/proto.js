$( document ).ready(function() {
    hideAll();
    bindMenu();
    $("#homemenu").click();
});
function hideAll(){

    $("#home").hide();
    $("#books").hide();
    $("#members").hide();
    $("#rent").hide();
}
function bindMenu(){
    $("#homemenu").parent().on("click", function () {
        hideAll();
        $("#home").show();
    });


    $("#membermenu").parent().on("click", function () {
        hideAll();
        $("#members").show();

    });

    $("#rentmenu").parent().on("click", function () {
        hideAll();
        $("#rent").show();

    });

    $("#bookmenu").parent().on("click", function () {
        hideAll();
        $("#books").show();

    });
}

