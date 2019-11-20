package hu.inf.unideb.projectcodetwo.dto;


import hu.inf.unideb.projectcodetwo.model.Loan;

import java.util.Set;

public class BookDTO {

    private Long bookId;
    private String author;
    private String title;
    private String publisher;
    private Long yearOfPublication;
    private Set<Loan> loans;

    public BookDTO() {
    }

    public Long getId() {
        return bookId;
    }

    public void setId(Long id) {
        this.bookId = id;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getPublisher() {
        return publisher;
    }

    public void setPublisher(String publisher) {
        this.publisher = publisher;
    }

    public Long getYearOfPublication() {
        return yearOfPublication;
    }

    public void setYearOfPublication(Long yearOfPublication) {
        this.yearOfPublication = yearOfPublication;
    }

    public BookDTO(Long id, String author, String title, String publisher, Long yearOfPublication) {
        this.bookId = id;
        this.author = author;
        this.title = title;
        this.publisher = publisher;
        this.yearOfPublication = yearOfPublication;
    }
}