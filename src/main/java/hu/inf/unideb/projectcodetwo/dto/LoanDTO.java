package hu.inf.unideb.projectcodetwo.dto;

import javax.persistence.*;
import java.sql.Date;

public class LoanDTO {

    private Long loanId;
    private Long bookID;
    private Long personID;
    private Date loanDate;
    private Date deadLine;
    private Date backDate;
    private PersonDTO personDTO;
    private BookDTO bookDTO;

    public Long getLoanId() {
        return loanId;
    }

    public void setLoanId(Long loanId) {
        this.loanId = loanId;
    }

    public PersonDTO getPersonDTO() {
        return personDTO;
    }

    public void setPersonDTO(PersonDTO personDTO) {
        this.personDTO = personDTO;
    }

    public BookDTO getBookDTO() {
        return bookDTO;
    }

    public void setBookDTO(BookDTO bookDTO) {
        this.bookDTO = bookDTO;
    }

    public LoanDTO() {
    }

    public Long getId() {
        return loanId;
    }

    public void setId(Long id) {
        this.loanId = id;
    }

    public Long getBookID() {
        return bookID;
    }

    public void setBookID(Long bookID) {
        this.bookID = bookID;
    }

    public Long getPersonID() {
        return personID;
    }

    public void setPersonID(Long personID) {
        this.personID = personID;
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

    public LoanDTO(Long id, Long bookID, Long personID, Date loanDate, Date deadLine, Date backDate) {
        this.loanId = id;
        this.bookID = bookID;
        this.personID = personID;
        this.loanDate = loanDate;
        this.deadLine = deadLine;
        this.backDate = backDate;
    }
}
