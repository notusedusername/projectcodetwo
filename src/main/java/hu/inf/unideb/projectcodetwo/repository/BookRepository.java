package hu.inf.unideb.projectcodetwo.repository;

import hu.inf.unideb.projectcodetwo.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
@Transactional
public interface BookRepository extends JpaRepository<Book, Long> {

  @Query("SELECT b FROM Book b WHERE b.bookId = (:bId)")
  List<Book> findByBookId(@Param("bId") String bookId);

}
