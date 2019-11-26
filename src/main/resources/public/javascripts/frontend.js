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
                .append($("<td>").addClass("td-id")
                .text(value.bookId))
                .append($("<td>").addClass("td-author")
                    .text(value.author))
                .append($("<td>").addClass("td-title")
                    .text(value.title))
                .append($("<td>").addClass("td-publisher")
                    .text(value.publisher))
                .append($("<td>").addClass("td-year")
                    .text(value.yearOfPublication)).
                append($("<td>")
                    .append($("<button>").addClass("watchPersons btn btn-xs btn-dark")
                    .append($("<i>").addClass("fa fa-info-circle")))));

    });
    bindSelections();
    bindInfoButtons();
}

function fillMemberInfoModal(code) {
    var $table = $("#memberSelectorTable");
    $table.html("")
        .append($("<thead>")
        .append($("<th>").text("Név"))
        .append($("<th>").text("Cím"))
        .append($("<th>").text("Elvitel"))
        .append($("<th>").text("Határidő"))
        .append($("<th>").text("Visszahozás")));
    var $tableBody = $table.append($("<tbody>"));
    $.each(bookRecords, function (id, book) {
        if(book.bookId === parseInt(code) && book.loans.length > 0) {
            $.each(book.loans, function (id, loan) {
                if (loan && loan.person) {
                    $tableBody.append($("<tr>")
                        .append($("<td>").text(loan.person.firstName +  " " + loan.person.lastName))
                        .append($("<td>").text(loan.person.adress))
                        .append($("<td>").text(loan.loanDate))
                        .append($("<td>").text(loan.deadLine))
                        .append($("<td>").text(loan.backDate)));
                }
            });
            return false;
        }
        else if (book.bookId === parseInt(code)) {
            $tableBody.append($("<tr>").text("--NINCSENEK KÖLCSÖNZÉSEK--"));
            return false;
        }
    });

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
                .append($("<td>").addClass("td-id")
                    .text(value.personId))
                .append($("<td>").addClass("td-firstName")
                    .text(value.firstName))
                .append($("<td>").addClass("td-lastName")
                    .text(value.lastName))
                .append($("<td>").addClass("td-birthDate")
                    .text(value.birthDate))
                .append($("<td>").addClass("td-adress")
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
            $.growl.error({message: "Valami nem jó!", location: "br"});
        });
}

function performAddPerson() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/member",
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "firstName": $("input[name=newMemberFirstName]").val(),
            "lastName": $("input[name=newMemberLastName]").val(),
            "birthDate": $("input[name=newMemberBirthDate]").val(),
            "adress": $("input[name=newMemberAddress]").val()
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

function addPerson() {
    performAddPerson()
        .done(function (data) {
            $.growl.notice({message: data.message, location: "br"});
            book = data;
            fetchMembers();
            $("#addMemberModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({message: "Valami nem jó! ", location: "br"});
        });
}

function updatePerson() {

}

function updateBook() {

}
function performDeleteBook() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/member"+"$(\".selected td-id\").text()",
        processData: false,
        method: "DELETE"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}

function deleteBook() {

}

function performDeletePerson() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/member/" + $("#membersTable .selected .td-id").text(),
        processData: false,
        method: "DELETE"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}

function deletePerson() {
    performDeletePerson()
        .done(function (data) {
            $.growl.notice({message: data.message, location: "br"});
            fetchMembers();
            $("#deleteMemberModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({message: "Valami nem jó! ", location: "br"});
        });
}