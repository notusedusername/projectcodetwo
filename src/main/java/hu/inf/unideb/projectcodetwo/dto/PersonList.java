package hu.inf.unideb.projectcodetwo.dto;

import com.fasterxml.jackson.annotation.JsonView;
import hu.inf.unideb.projectcodetwo.model.Person;
import hu.inf.unideb.projectcodetwo.views.Views;

import java.util.List;

public class PersonList {
    @JsonView(Views.FromPerson.class)

    private List<Person> data;
    private Long count;

    public List<Person> getData() {
        return data;
    }

    public void setData(List<Person> data) {
        this.data = data;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
