var active = "rgb(0, 123, 255)";
var passive = "rgb(251, 252, 252)";

var allBooksColor = active;
var allMembersColor = active;

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

    $("#books tbody tr, #members tbody tr").on("click", function () {
        if($(this).css("background-color") == active){
            $(this).css("background-color", passive);
        }
        else{
            $(this).css("background-color", active);
        }
    });

    $("#selectAllBook").on("click", function () {
        $("#books tbody tr").css("background-color", allBooksColor);
        if(allBooksColor == active){
            allBooksColor = passive;
        }
        else {
            allBooksColor = active;
        }
    });

    $("#selectAllMember").on("click", function () {
        $("#members tbody tr").css("background-color", allMembersColor);
        if(allMembersColor == active){
            allMembersColor = passive;
        }
        else {
            allMembersColor = active;
        }
    });

    $("#addBook").on("click", function () {
        $('#addBookModal').modal();
    });

    $("#addMember").on("click", function () {
        $('#addMemberModal').modal();
    });
}



