package hu.inf.unideb.projectcodetwo.controller;



import hu.inf.unideb.projectcodetwo.dto.LoanDTO;
import hu.inf.unideb.projectcodetwo.dto.ResponseDTO;
import hu.inf.unideb.projectcodetwo.service.LoanService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value = "/codetwo", produces="application/json")
public class LoanController {

    @Autowired
    private LoanService loanService;

    @PostMapping(value = "/putback", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public ResponseDTO putback(@RequestParam String personId,@RequestParam String bookId  ) {
        return loanService.putb( personId, bookId);

    }

    @PostMapping(value = "/getbook", produces = "application/json")
    @ResponseStatus(HttpStatus.OK)
    public ResponseDTO rentBook(@RequestParam String personId, String bookId) {
        return loanService.rent(personId, bookId);
    }



}
