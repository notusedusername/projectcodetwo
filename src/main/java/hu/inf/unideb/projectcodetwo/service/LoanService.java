package hu.inf.unideb.projectcodetwo.service;

import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.model.Loan;
import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.repository.LoanRepository;
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

        Person person = new Person();
        person.setId(longPersonId);

        Book book = new Book();
        book.setId(longBookId);

        Loan loan = new Loan();
        loan.setPerson(person);
        return null;
    }

}
