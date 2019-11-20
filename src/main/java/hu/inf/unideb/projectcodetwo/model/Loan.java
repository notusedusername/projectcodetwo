package hu.inf.unideb.projectcodetwo.model;

import javax.persistence.*;
import java.sql.Date;


@Entity
public class Loan {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column
    private Long loanId;

    @Column
    private Date loanDate;

    @Column
    private Date deadLine;

    @Column
    private Date backDate;

    @ManyToOne
    private Book book;

    @ManyToOne
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

    public Long getId() {
        return loanId;
    }

    public void setId(Long id) {
        this.loanId = id;
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

    public Loan(Long id, Long bookID, Long personID, Date loanDate, Date deadLine, Date backDate) {
        this.loanId = id;
        this.loanDate = loanDate;
        this.deadLine = deadLine;
        this.backDate = backDate;
    }
}
