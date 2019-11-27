package hu.inf.unideb.projectcodetwo.service;

import hu.inf.unideb.projectcodetwo.dto.BookList;
import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;

import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    BookRepository bookRepository;

    public BookList getBooks() {
        BookList bookList = new BookList();
        bookList.setData(bookRepository.findAll());
        bookList.setCount(bookRepository.count());
        return bookList;
    }

    public ResponseDTO addBook(Book resource) {
        Long id = bookRepository.save(resource).getId();
        return new ResponseDTO(id, "Könyv sikeresen hozzáadva.");
    }

    public ResponseDTO updateBook(Long id, Book resource) {
        if( bookRepository.existsById(id) ){
            resource.setId(id);
            bookRepository.save(resource);
            return new ResponseDTO(id, "Könyv sikeresen frissítve.");
        }
        else {
            return new ResponseDTO(id, "Nincs könyv ilyen azonosítóval!");
        }
    }

    public ResponseDTO deleteBook(Long id) {
        bookRepository.deleteById(id);
        return new ResponseDTO(id,"Könyv sikeresen törölve");
    }
}
