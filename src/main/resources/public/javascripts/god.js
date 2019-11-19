var active = "rgb(0, 123, 255)";
var passive = "rgb(52,58,64)";

var selectedBookCount = 0;
var selectedMemberCount = 0;

var allBooksColor = active;
var allMembersColor = active;

var oneSelectedBook = ["#selectAllBook", "#startRentFromBook", "#addBook", "#editSelectedBook", "#deleteSelectedBook" ];
var nullSelectedBook = ["#selectAllBook",  "#addBook"];
var moreSelectedBook = ["#selectAllBook", "#addBook", "#deleteSelectedBook"];

var oneSelectedMember = ["#selectAllMember", "#startRentFromMember", "#addMember", "#editSelectedMember", "#deleteSelectedMember" ];
var nullSelectedMember = ["#selectAllMember",  "#addMember"];
var moreSelectedMember = ["#selectAllMember", "#addMember", "#deleteSelectedMember"];

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
    $("#logomenu").parent().on("click", function () {
        window.location = "https://notusedusername.github.io/projectcodetwo/";
    });

    $("#homemenu").parent().on("click", function () {
        hideAll();
        $("#home").show();
    });


    $("#membermenu").parent().on("click", function () {
        hideAll();
        $("#members").show();
        fetchMembers();
        showMemberActions();

    });

    $("#rentmenu").parent().on("click", function () {
        hideAll();
        $("#rent").show();

    });

    $("#bookmenu").parent().on("click", function () {
        hideAll();
        $("#books").show();
        fetchBooks();
        showBookActions();

    });

    $("#addBook").on("click", function () {
        $('#addBookModal').modal();
    });

    $("#addMember").on("click", function () {
        $('#addMemberModal').modal();
    });

    $("#addMemberToDB").on("click", function () {
        $("#fakeMemberSubmit").click();
    });
    $("#addBookToDB").on("click", function () {
        $("#fakeBookSubmit").click();
    });

    $("#bookForm").on("submit", function (e) {
        addBook();
        return false;
    });

    $("#memberForm").on("submit", function (e) {
        addPerson();
        return false;
    });

    $("#editSelectedMember").on("click", function () {
       $("#editMemberModal").modal();
    });

    $("#editMemberSubmit").on("click", function () {
        $("#fakeEditMemberSubmit").click();
    });

    $("#editSelectedBook").on("click", function () {
        $("#editBookModal").modal();
    });

    $("#editBookSubmit").on("click", function () {
        $("#fakeEditBookSubmit").click();
    });

    $("#bookeditForm").on("submit", function () {
       return false;
    });

    $("#deleteSelectedMember").on("click", function () {
        alert("Törlöm a kiválasztott tagot!");
    });

    $("#deleteSelectedBook").on("click", function () {
       alert("Törlöm a kiválasztott könyvet!");
    });

    $("#startRentFromMember").on("click", function () {
        $("#rentmenu").click();
        alert("Autokiegészítés a választott taggal");
    });

    $("#startRentFromBook").on("click", function () {
        $("#rentmenu").click();
        alert("Autokiegészítés a választott könyvvel/könyvekkel");
    });

    $("#selectBook").on("click", function () {
        $("#selectBookModal").modal();
    });

    $("#selectMember").on("click", function () {
       $("#selectMemberModal").modal();
    });

}

function bindSelections() {
    $("#books tbody tr, #members tbody tr").on("click", function () {
        var thisID = $(this).parent().parent().parent().attr("id");
        if($(this).css("background-color") == active){
            $(this).css("background-color", passive);
            if(thisID == "books"){
                selectedBookCount--;
                showBookActions();
            }
            else {
                selectedMemberCount--;
                showMemberActions();
            }
        }
        else{
            $(this).css("background-color", active);
            if(thisID == "books"){
                selectedBookCount++;
                showBookActions();
            }
            else {
                selectedMemberCount++;
                showMemberActions();
            }
        }
    });

    $("#selectAllBook").on("click", function () {
        $("#books tbody tr").css("background-color", allBooksColor);
        if(allBooksColor == active){
            allBooksColor = passive;
            selectedBookCount = -1;
            showBookActions();
        }
        else {
            allBooksColor = active;
            selectedBookCount = 0;
            showBookActions();
        }
    });

    $("#selectAllMember").on("click", function () {
        $("#members tbody tr").css("background-color", allMembersColor);
        if(allMembersColor == active){
            allMembersColor = passive;
            selectedMemberCount = -1;
            showMemberActions();
        }
        else {
            allMembersColor = active;
            selectedMemberCount = 0;
            showMemberActions();
        }
    });
}

function showMemberActions(){
    $.each(oneSelectedMember, function (index, value) {
        $(value).hide();
    });
    if(selectedMemberCount == 0){
        $.each(nullSelectedMember, function (index, value) {
           $(value).show();
        });
    }
    else if (selectedMemberCount == 1){
        $.each(oneSelectedMember, function (index, value) {
            $(value).show();
        });
    }
    else {
        $.each(moreSelectedMember, function (index, value) {
            $(value).show();
        });
    }
}

function showBookActions() {
    $.each(oneSelectedBook, function (index, value) {
        $(value).hide();
    });
    if(selectedBookCount == 0){
        $.each(nullSelectedBook, function (index, value) {
            $(value).show();
        });
    }
    else if (selectedBookCount == 1){
        $.each(oneSelectedBook, function (index, value) {
            $(value).show();
        });
    }
    else {
        $.each(moreSelectedBook, function (index, value) {
            $(value).show();
        });
    }
}

