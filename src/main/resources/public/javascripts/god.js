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
        loadMembersTable();
        showMemberActions();
    });

    $("#firstPageBtnMembers").on("click", function () {
        hideAll();
        $("#members").show();
        loadMembersTable();
        showMemberActions();
    });

    $("#prevPageBtnMembers").on("click", function () {
        hideAll();
        $("#members").show();
        prevPageMembers();
        showMemberActions();
    });

    $("#nextPageBtnMembers").on("click", function () {
        hideAll();
        $("#members").show();
        nextPageMembers();
        showMemberActions();
    });

    $("#lastPageBtnMembers").on("click", function () {
        hideAll();
        $("#members").show();
        lastPageMembers();
        showMemberActions();
    });

    $("#rentmenu").parent().on("click", function () {
        hideAll();
        $("#rent").show();

    });

    $("#bookmenu").parent().on("click", function () {
        hideAll();
        $("#books").show();
        loadBooksTable();
        showBookActions();
    });

    $("#firstPageBtnBooks").on("click", function () {
        hideAll();
        $("#books").show();
        loadBooksTable();
        showBookActions();
    });

    $("#prevPageBtnBooks").on("click", function () {
        hideAll();
        $("#books").show();
        prevPageBooks();
        showBookActions();
    });

    $("#nextPageBtnBooks").on("click", function () {
        hideAll();
        $("#books").show();
        nextPageBooks();
        showBookActions();
    });

    $("#lastPageBtnBooks").on("click", function () {
        hideAll();
        $("#books").show();
        lastPageBooks();
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
    allBooksSelected = false;
    allMembersSelected = false;

    showMemberActions();
    showBookActions();

    $("#books tbody tr, #members tbody tr").on("click", function () {
        var thisID = $(this).closest("table").attr("id");
        if($(this).hasClass("selected")){
            $(this).removeClass("selected");
            if(thisID == "booksTable"){
                showBookActions();
            }
            else {
                showMemberActions();
            }
        }
        else{
            $(this).addClass("selected");
            if(thisID == "booksTable"){
                showBookActions();
            }
            else {
                showMemberActions();
            }
        }
    });

    $("#selectAllBook").on("click", function () {
        if(allBooksSelected){
            $("#books tbody tr").removeClass("selected");
            allBooksSelected = false;
            showBookActions();
        }
        else {
            $("#books tbody tr").addClass("selected");
            allBooksSelected = true;
            showBookActions();
        }
    });

    $("#selectAllMember").on("click", function () {
        if(allMembersSelected){
            $("#members tbody tr").removeClass("selected");
            allMembersSelected = false;
            showMemberActions();
        }
        else {
            $("#members tbody tr").addClass("selected");
            allMembersSelected = true;
            showMemberActions();
        }
    });
}

function bindInfoButtons() {
    $(".watchPersons").click(function (e) {
        e.stopPropagation();
        fillMemberInfoModal(getID($(this)));
        $("#selectMemberModal").modal();
    });

    $(".watchBooks").click(function (e) {
        e.stopPropagation();
        fillBooksInfoModal(getID($(this)));
        $("#selectBookModal").modal();
    });
}

function getID($infobutton) {

    return $infobutton.closest($("tr")).find(".td-id").text();
}

function showMemberActions(){
    $.each(oneSelectedMember, function (index, value) {
        $(value).hide();
    });
    if($("#membersTable .selected").length == 0){
        $.each(nullSelectedMember, function (index, value) {
           $(value).show();
        });
    }
    else if ($("#membersTable .selected").length == 1){
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
    if($("#booksTable .selected").length == 0){
        $.each(nullSelectedBook, function (index, value) {
            $(value).show();
        });
    }
    else if ($("#booksTable .selected").length == 1){
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

