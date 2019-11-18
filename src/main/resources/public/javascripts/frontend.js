var host = "http://"+window.location.host;
var context = "/codetwo";

var bookRecords;
var memberRecords;

function updateBookTable($table){
    var $tableBody = $table.children("tbody");
    $tableBody.html("");
    $.each(bookRecords, function (index, value) {
        $tableBody
            .append($("<tr>")
                .append($("<td>")
                .text(value.id))
                .append($("<td>")
                    .text(value.author))
                .append($("<td>")
                    .text(value.title))
                .append($("<td>")
                    .text(value.publisher))
                .append($("<td>")
                    .text(value.yearOfPublication)));

    });
    bindSelections();
}

function performFetchBooks() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/books",
        method: "GET"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}


function fetchBooks() {
    performFetchBooks()
        .done(function (data) {
            $.growl.notice({message: "Adatbázis frissítve", location: "br"});
            bookRecords = data;
            updateBookTable($("#booksTable"));
        })
        .fail(function (err) {
            $.growl.error({message: "Valami nem jó! "+ err, location: "br"});
        });
}

function updateMemberTable($table){
    var $tableBody = $table.children("tbody");
    $tableBody.html("");
    $.each(memberRecords, function (index, value) {
        $tableBody
            .append($("<tr>")
                .append($("<td>")
                    .text(value.personId))
                .append($("<td>")
                    .text(value.firstName))
                .append($("<td>")
                    .text(value.lastName))
                .append($("<td>")
                    .text(value.birthDate))
                .append($("<td>")
                    .text(value.adress)));

    });
    bindSelections();
}

function performFetchMembers() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/member",
        method: "GET"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}


function fetchMembers() {
    performFetchMembers()
        .done(function (data) {
            $.growl.notice({message: "Adatbázis frissítve", location: "br"});
            memberRecords = data;
            updateMemberTable($("#membersTable"));
        })
        .fail(function (err) {
            $.growl.error({message: "Valami nem jó! "+ err, location: "br"});
        });
}

function performAddBook() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/books",
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "title": $("input[name=newTitle]").val(),
            "author": $("input[name=newAuthor]").val(),
            "publisher": $("input[name=newPublisher]").val(),
            "yearOfPublication": $("input[name=newPublishingDate]").val()
        }),
        method: "POST"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}

function addBook() {
    performAddBook()
        .done(function (data) {
            $.growl.notice({message: "Új könyv hozzáadva!", location: "br"});
            book = data;
            fetchBooks();
            $("#addBookModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({message: "Valami nem jó! "+ err, location: "br"});
        });
}

