package hu.inf.unideb.projectcodetwo.repository;


import hu.inf.unideb.projectcodetwo.model.Loan;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;

@Repository
@Transactional
public interface LoanRepository extends PagingAndSortingRepository<Loan, Long> {

}
