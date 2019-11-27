package hu.inf.unideb.projectcodetwo.repository;

import hu.inf.unideb.projectcodetwo.model.Book;
import hu.inf.unideb.projectcodetwo.model.Person;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface BookRepository extends PagingAndSortingRepository<Book, Long> {
  Page<Book> findAll(Pageable pageable);


}
