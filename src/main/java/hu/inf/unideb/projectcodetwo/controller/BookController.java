package hu.inf.unideb.projectcodetwo.controller;

import hu.inf.unideb.projectcodetwo.dto.BookDTO;
import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.service.BookService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping(value = "/codetwo", produces="application/json")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping(value ="/books")
    public List<Book> fetchAll(){
        return bookService.getBooks();
    }

    @PostMapping(value = "/books", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public Book addNewBook(@RequestBody BookDTO resource) {
        return bookService.addBook(modelMapper.map(resource, Book.class));
    }

    @PutMapping(value = "books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public int update(@PathVariable( "id" ) Long id, @RequestBody BookDTO resource) {
        return bookService.updateBook(id, modelMapper.map(resource, Book.class));
    }

    @DeleteMapping(value = "books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public int delete(@PathVariable("id") Long id) {
        return bookService.deleteBook(id);
    }
}
