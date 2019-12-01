package hu.inf.unideb.projectcodetwo.repository;


import hu.inf.unideb.projectcodetwo.model.Loan;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.sql.Date;

@Repository
@Transactional
public interface LoanRepository extends PagingAndSortingRepository<Loan, Long> {
    @Modifying
    @Query("update  Loan l set l.backDate = :date where l.backDate is null and l.book.bookId = :bid and l.person.personId = :pid")

 void putBackbook(@Param("bid")Long bookId, @Param("pid")Long personId, @Param("date")Date sqlDate);
}
