var host = "http://"+window.location.host;
var context = "/codetwo";

var bookRecords;

function updateTable($table){
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
            updateTable($("#booksTable"));
        })
        .fail(function (err) {
            $.growl.error({message: "Valami nem jó! "+ err, location: "br"});
        });
}