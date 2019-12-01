var host = "http://"+window.location.host;
var context = "/codetwo";

var bookRecords;
var memberRecords;

var pageNumBooks=0;
var pageNumPerson=0;

var maxElementPerson;
var maxElementBooks;

var maxPageNumPerson;
var maxPageNumBooks;

function getPersonCount(){
    performgetPC().done(function(data){
        maxElementPerson = data;
    })
}

function performgetPC(){
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/bookcount",
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

function getBookCount(){
    performgetPC().done(function(data){
        maxElementBooks = data;
    })
}

function performgetBC(){
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/membercount",
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

function loadBooksTable() {
    pageNumBooks=0;
    fetchBooks();
}

function loadBooksTableLoan() {
    pageNumBooks=0;
    loanBookSelector();
}

function loadMembersTable() {
    pageNumPerson = 0;
    fetchMembers();
}

function loadMembersTableLoan() {
    pageNumPerson = 0;
    loanMemberSelector();
}

function lastPageMembers() {
    if (maxElementPerson%10 === 0) {
        pageNumPerson = (maxElementPerson/10)-1;
        fetchMembers();
    } else {
        pageNumPerson = (maxElementPerson/10) | 0;
        fetchMembers();
    }
}


function lastPageMembersLoan() {
    if (maxElementPerson%10 === 0) {
        pageNumPerson = (maxElementPerson/10)-1;
        loanMemberSelector();
    } else {
        pageNumPerson = (maxElementPerson/10) | 0;
        loanMemberSelector();
    }
}


function lastPageBooks() {
    if (maxElementBooks%10 === 0) {
        pageNumBooks = (maxElementBooks/10)-1;
        fetchBooks();
    } else {
        pageNumBooks = (maxElementBooks/10) | 0;
        fetchBooks();
    }
}

function lastPageBooksLoan() {
    if (maxElementBooks%10 === 0) {
        pageNumBooks = (maxElementBooks/10)-1;
        loanBookSelector();
    } else {
        pageNumBooks = (maxElementBooks/10) | 0;
        loanBookSelector();
    }
}

function nextPageBooks() {
    if(maxElementBooks%10 === 0) {
        maxPageNumBooks = maxElementBooks/10;
        if (pageNumBooks === maxPageNumBooks) {
            fetchBooks();
        } else if (pageNumBooks < maxPageNumBooks-1){
            pageNumBooks += 1;
            fetchBooks();
        }
    } else if (maxElementBooks%10 !== 0) {
        maxPageNumBooks = maxElementBooks/10;
        if (pageNumBooks === maxPageNumBooks+1){
            fetchBooks();
        } else if (pageNumBooks < maxPageNumBooks-1){
            pageNumBooks += 1;
            fetchBooks();
        }
    }
}

function nextPageBooksLoan() {
    if(maxElementBooks%10 === 0) {
        maxPageNumBooks = maxElementBooks/10;
        if (pageNumBooks === maxPageNumBooks) {
            loanBookSelector();
        } else if (pageNumBooks < maxPageNumBooks-1){
            pageNumBooks += 1;
            loanBookSelector();
        }
    } else if (maxElementBooks%10 !== 0) {
        maxPageNumBooks = maxElementBooks/10;
        if (pageNumBooks === maxPageNumBooks+1){
            loanBookSelector();
        } else if (pageNumBooks < maxPageNumBooks-1){
            pageNumBooks += 1;
            loanBookSelector();
        }
    }
}

function nextPageMembers() {
    if(maxElementPerson%10 === 0) {
        maxPageNumPerson = maxElementPerson/10;
        if (pageNumPerson === maxPageNumPerson) {
            fetchMembers();
        } else if (pageNumPerson < maxPageNumPerson-1){
            pageNumPerson += 1;
            fetchMembers();
        }
    } else if (maxElementPerson%10 !== 0) {
        maxPageNumPerson = maxElementPerson/10;
        if (pageNumPerson === maxPageNumPerson+1){
            fetchMembers();
        } else if (pageNumPerson < maxPageNumPerson-1){
            pageNumPerson += 1;
            fetchMembers();
        }
    }
}

function nextPageMembersLoan() {
    if(maxElementPerson%10 === 0) {
        maxPageNumPerson = maxElementPerson/10;
        if (pageNumPerson === maxPageNumPerson) {
            loanMemberSelector();
        } else if (pageNumPerson < maxPageNumPerson-1){
            pageNumPerson += 1;
            loanMemberSelector();
        }
    } else if (maxElementPerson%10 !== 0) {
        maxPageNumPerson = maxElementPerson/10;
        if (pageNumPerson === maxPageNumPerson+1){
            loanMemberSelector();
        } else if (pageNumPerson < maxPageNumPerson-1){
            pageNumPerson += 1;
            loanMemberSelector();
        }
    }
}

function prevPageBooks() {
    if(pageNumBooks !== 0) {
        pageNumBooks -= 1;
    }
    fetchBooks();
}

function prevPageBooksLoan() {
    if(pageNumBooks !== 0) {
        pageNumBooks -= 1;
    }
    loanBookSelector();
}

function prevPageMembers() {
    if(pageNumPerson!==0){
        pageNumPerson -= 1;
    }
    fetchMembers();
}

function prevPageMembersLoan() {
    if(pageNumPerson!==0){
        pageNumPerson -= 1;
    }
    loanMemberSelector();
}

function performFetchBooks() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/books?page="+pageNumBooks,
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
            bookRecords = data.data;
             getBookCount();
            updateBookTable($("#booksTable"));
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
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
                    .text(value.adress))
                .append($("<td>")
                    .append($("<button>").addClass("watchBooks btn btn-xs btn-dark")
                        .append($("<i>").addClass("fa fa-info-circle")))));

    });
    bindSelections();
    bindInfoButtons();
}

function fillBooksInfoModal(code) {
    var $table = $("#bookSelectorTable");
    $table.html("")
        .append($("<thead>")
            .append($("<th>").text("Író"))
            .append($("<th>").text("Cím"))
            .append($("<th>").text("Elvitel"))
            .append($("<th>").text("Határidő"))
            .append($("<th>").text("Visszahozás")));
    var $tableBody = $table.append($("<tbody>"));
    $.each(memberRecords, function (id, person) {
        if(person.personId === parseInt(code) && person.loans.length > 0) {
            $.each(person.loans, function (id, loan) {
                if (loan && loan.book) {
                    $tableBody.append($("<tr>")
                        .append($("<td>").text(loan.book.author))
                        .append($("<td>").text(loan.book.title))
                        .append($("<td>").text(loan.loanDate))
                        .append($("<td>").text(loan.deadLine))
                        .append($("<td>").text(loan.backDate)));
                }
            });
            return false;
        }
        else if (person.personId === parseInt(code)) {
            $tableBody.append($("<tr>").text("--NINCSENEK KÖLCSÖNZÉSEK--"));
            return false;
        }
    });

}

function performFetchMembers() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/member?page="+pageNumPerson,
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
            memberRecords = data.data;
             getPersonCount();
            updateMemberTable($("#membersTable"));
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
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
            loadBooksTable();
            $("#addBookModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
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
            loadMembersTable();
            $("#addMemberModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
}

function fillUpdatePerson() {
    $("#memberEditForm input[name=newMemberFirstName]").val($("#membersTable .selected .td-firstName").text());
    $("#memberEditForm input[name=newMemberLastName]").val($("#membersTable .selected .td-lastName").text());
    $("#memberEditForm input[name=newMemberBirthDate]").val($("#membersTable .selected .td-birthDate").text());
    $("#memberEditForm input[name=newMemberAddress]").val($("#membersTable .selected  .td-adress").text());
}

function fillUpdateBook() {
    $("#bookeditForm input[name=newAuthor]").val($("#booksTable .selected .td-author").text());
    $("#bookeditForm input[name=newTitle]").val($("#booksTable .selected .td-title").text());
    $("#bookeditForm input[name=newPublisher]").val($("#booksTable .selected .td-publisher").text());
    $("#bookeditForm input[name=newPublishingDate]").val($("#booksTable .selected .td-year").text());
}

function updatePerson() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/member/"+$("#membersTable .selected .td-id").text(),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "firstName": $("#memberEditForm input[name=newMemberFirstName]").val(),
            "lastName": $("#memberEditForm input[name=newMemberLastName]").val(),
            "birthDate": $("#memberEditForm input[name=newMemberBirthDate]").val(),
            "adress": $("#memberEditForm input[name=newMemberAddress]").val()
        }),
        method: "PUT"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}

function editMember() {
    updatePerson()
        .done(function (data) {
            $.growl.notice({message: data.message, location: "br"});
            book = data;
            loadMembersTable();
            $("#editMemberModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
}

function updateBook() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/books/"+$("#booksTable .selected .td-id").text(),
        processData: false,
        contentType: 'application/json',
        data: JSON.stringify({
            "title": $("#bookeditForm input[name=newTitle]").val(),
            "author": $("#bookeditForm input[name=newAuthor]").val(),
            "publisher": $("#bookeditForm input[name=newPublisher]").val(),
            "yearOfPublication": $("#bookeditForm input[name=newPublishingDate]").val()
        }),
        method: "PUT"
    } )
        .done(function(data) {
            defered.resolve(data);
        })
        .fail(function(err) {
            defered.reject(err)
        });
    return defered.promise();
}

function editBook() {
    updateBook()
        .done(function (data) {
            $.growl.notice({message: data.message, location: "br"});
            book = data;
            loadBooksTable();
            $("#editBookModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
}
function performDeleteBook() {
    var defered = jQuery.Deferred();
    var jqxhr = $.ajax( {
        url: host+context+"/books/" + $("#booksTable .selected .td-id").text(),
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
    performDeleteBook()
        .done(function (data) {
            $.growl.notice({message: data.message, location: "br"});
            loadBooksTable();
            $("#deleteBookModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
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
            loadMembersTable();
            $("#deletePersonModal").modal("hide");
        })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
}

function loanMemberSelector () {
    performFetchMembers().done(function(data) {
        memberRecords = data.data;
        getPersonCount();
        var $table = $("#memberSelectorTableLoan");
        $table.html("")
            .append($("<thead>")
                .append($("<th>").text("ID"))
                .append($("<th>").text("Név"))
                .append($("<th>").text("Lakcím"))
                .append($("<th>").text("Születési Dátum")));
        var $tableBody = $table.append($("<tbody>"));
        $.each(memberRecords, function (id, person) {
            $tableBody.append($("<tr>")
                .append($("<td>").text(person.personId))
                .append($("<td>").text(person.firstName + " " + person.lastName))
                .append($("<td>").text(person.adress))
                .append($("<td>").text(person.birthDate)));
        });
        bindSelectionsLoan();
    })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
}

function loanBookSelector () {
    performFetchBooks().done(function(data) {
        bookRecords = data.data;
         getBookCount();
        var $table = $("#bookSelectorTableLoan");
        $table.html("")
            .append($("<thead>")
                .append($("<th>").text("ID"))
                .append($("<th>").text("Író"))
                .append($("<th>").text("Cím"))
                .append($("<th>").text("Kiadás Dátum")));
        var $tableBody = $table.append($("<tbody>"));
        $.each(bookRecords, function (id, book) {
            $tableBody.append($("<tr>")
                .append($("<td>").text(book.bookId))
                .append($("<td>").text(book.author))
                .append($("<td>").text(book.title))
                .append($("<td>").text(book.yearOfPublication)));
        });
        bindSelectionsLoan();
    })
        .fail(function (err) {
            $.growl.error({ title: "HIBA!", message: err.responseJSON.message, location: "br"});
        });
}