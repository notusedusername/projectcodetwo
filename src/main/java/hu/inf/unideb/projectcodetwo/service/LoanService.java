package hu.inf.unideb.projectcodetwo.service;

import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.model.Loan;
import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.repository.LoanRepository;
import org.apache.commons.lang3.time.DateUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class LoanService {
    @Autowired
    LoanRepository loanRepository;

    public ResponseDTO putb(String personId, String bookId) {
        long longPersonId;
        long longBookId;
        try {
            longPersonId = Long.parseLong(personId);
            longBookId = Long.parseLong(bookId);
        } catch (Exception e) {
            return new ResponseDTO(new Long(0), "Nem érvényes azonositó.");

        }
        java.sql.Date sqlDate =new  java.sql.Date(new Date().getTime());
        loanRepository.putBackbook(bookId,personId,sqlDate);

        return null;
    }





    public ResponseDTO rent(String personId, String bookId) {
        long longPersonId;
        long longBookId;
        try {
            longPersonId = Long.parseLong(personId);
            longBookId = Long.parseLong(bookId);
        } catch (Exception e) {
            return new ResponseDTO(new Long(0),"Nem érvényes azonosító.");
        }

        Book book = new Book(longBookId);
        Person person = new Person(longPersonId);
        Date loanDate = new Date();
        Date deadLine = DateUtils.addMonths(loanDate, 1);
        java.sql.Date sqlLoanDate = new java.sql.Date(loanDate.getTime());
        java.sql.Date sqlDeadLine = new java.sql.Date(deadLine.getTime());

        Loan loan = new Loan(sqlLoanDate, sqlDeadLine,null,person,book);

        return new ResponseDTO(loanRepository.save(loan).getLoanId(),"Sikeresen hozzáadva.");
    }

}
