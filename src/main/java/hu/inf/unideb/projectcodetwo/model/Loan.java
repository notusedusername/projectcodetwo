package hu.inf.unideb.projectcodetwo.model;

import com.fasterxml.jackson.annotation.JsonView;
import hu.inf.unideb.projectcodetwo.views.Views;

import javax.persistence.*;
import java.sql.Date;


@Entity
public class Loan {
    @Id
    @JsonView(Views.Base.class)
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long loanId;

    @JsonView(Views.Base.class)
    @Column
    private Date loanDate;

    @JsonView(Views.Base.class)
    @Column
    private Date deadLine;

    @JsonView(Views.Base.class)
    @Column
    private Date backDate;

    @ManyToOne(optional = false)
    @JsonView(Views.FromPerson.class)
    private Book book;

    @ManyToOne(optional = false)
    @JsonView(Views.FromBook.class)
    private Person person;

    public Long getLoanId() {
        return loanId;
    }

    public void setLoanId(Long loanId) {
        this.loanId = loanId;
    }

    public Book getBook() {
        return book;
    }

    public void setBook(Book book) {
        this.book = book;
    }

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    public Loan() {
    }

    public Date getLoanDate() {
        return loanDate;
    }

    public void setLoanDate(Date loanDate) {
        this.loanDate = loanDate;
    }

    public Date getDeadLine() {
        return deadLine;
    }

    public void setDeadLine(Date deadLine) {
        this.deadLine = deadLine;
    }

    public Date getBackDate() {
        return backDate;
    }

    public void setBackDate(Date backDate) {
        this.backDate = backDate;
    }

    public Loan(Date loanDate, Date deadLine, Date backDate, Person person, Book book) {
        this.loanDate = loanDate;
        this.deadLine = deadLine;
        this.backDate = backDate;
        this.person = person;
        this.book = book;
    }
}
