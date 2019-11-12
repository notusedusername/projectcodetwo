package hu.inf.unideb.projectcodetwo.service;

import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.service.crud.BookFetcher;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    public List<Book> getBooks() {

        return BookFetcher.fetchData();
    }

    public int addBook(Book resource) {
        return 0;
    }

    public int updateBook(Long id, Book resource) {
        return 0;
    }

    public int deleteBook(Long id) {
        return 0;
    }
}
