package hu.inf.unideb.projectcodetwo.dto;

import com.fasterxml.jackson.annotation.JsonView;
import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.views.Views;

import java.util.List;

public class BookList {
    @JsonView(Views.FromBook.class)

    private List<Book> data;
    private Long count;

    public List<Book> getData() {
        return data;
    }

    public void setData(List<Book> data) {
        this.data = data;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
