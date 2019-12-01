package hu.inf.unideb.projectcodetwo.controller;

import com.fasterxml.jackson.annotation.JsonView;
import hu.inf.unideb.projectcodetwo.dto.BookDTO;
import hu.inf.unideb.projectcodetwo.dto.BookList;
import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.service.BookService;
import hu.inf.unideb.projectcodetwo.views.Views;
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
    public @ResponseBody
    BookList fetchAll(@RequestParam String page){
        return bookService.getBooks(page);
    }

    @GetMapping(value="/bookcount")
    public @ResponseBody long getCount(){
        return bookService.getCount();
    }

    @PostMapping(value = "/books", consumes = "application/json", produces = "application/json")
    @ResponseStatus(HttpStatus.CREATED)
    public ResponseDTO addNewBook(@RequestBody BookDTO resource) {
        return bookService.addBook(modelMapper.map(resource, Book.class));
    }

    @PutMapping(value = "books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseDTO update(@PathVariable( "id" ) Long id, @RequestBody BookDTO resource) {
        return bookService.updateBook(id, modelMapper.map(resource, Book.class));
    }

    @DeleteMapping(value = "books/{id}")
    @ResponseStatus(HttpStatus.OK)
    public ResponseDTO delete(@PathVariable("id") Long id) {
        return bookService.deleteBook(id);
    }
}
