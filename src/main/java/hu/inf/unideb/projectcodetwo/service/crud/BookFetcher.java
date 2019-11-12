package hu.inf.unideb.projectcodetwo.service.crud;

import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.utils.HibernateUtils;

import java.util.List;

public class BookFetcher {

    public static List<Book>fetchData(){
       return HibernateUtils.getSession().createQuery("FROM Book ").list();
    }
}
