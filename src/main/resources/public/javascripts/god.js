var selectedBookCount = 0;
var selectedMemberCount = 0;

var allBooksSelected = false;
var allMembersSelected = false;

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
       fillUpdatePerson();
    });

    $("#editMemberSubmit").on("click", function () {
        $("#fakeEditMemberSubmit").click();
    });

    $("#memberEditForm").on("submit", function() {
        editMember();
        return false;
    });

    $("#editSelectedBook").on("click", function () {
        $("#editBookModal").modal();
        fillUpdateBook();
    });

    $("#editBookSubmit").on("click", function () {
        $("#fakeEditBookSubmit").click();
    });

    $("#bookeditForm").on("submit", function() {
        editBook();
        return false;
    })

    $("#bookeditForm").on("submit", function () {
       return false;
    });

    $("#deleteSelectedMember").on("click", function () {
        $("#deletePersonModal").modal();
    });

    $("#deletePersonSubmit").on("click",function () {
        deletePerson();
    });

    $("#deleteSelectedBook").on("click", function () {
        $("#deleteBookModal").modal();
    });

    $("#deleteBookSubmit").on("click",function () {
        deleteBook();
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
        var thisID = $(this).closest("table").attr("id");
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            if(thisID == "booksTable"){
                selectedBookCount--;
                showBookActions();
            }
            else {
                selectedMemberCount--;
                showMemberActions();
            }
        }
        else{
            $(this).addClass("selected");
            if(thisID == "booksTable"){
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
        if(allBooksSelected){
            $("#books tbody tr").removeClass("selected");
            allBooksSelected = false;
            selectedBookCount = 0;
            showBookActions();
        }
        else {
            $("#books tbody tr").addClass("selected");
            allBooksSelected = true;
            selectedBookCount = -1;
            showBookActions();
        }
    });

    $("#selectAllMember").on("click", function () {
        if(allMembersSelected){
            allMembersColor = false;
            $("#members tbody tr").removeClass("selected");
            selectedMemberCount = 0;
            showMemberActions();
        }
        else {
            allMembersColor = true;
            selectedMemberCount = -1;
            $("#members tbody tr").addClass("selected");
            showMemberActions();
        }
    });
}

function bindInfoButtons() {
    $(".watchPersons").click(function (e) {
        e.stopPropagation();
        fillMemberInfoModal(getID($(this)));
        $("#selectMemberModal").modal();
    })
}

function getID($infobutton) {

    return $infobutton.closest($("tr")).find(".td-id").text();
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

