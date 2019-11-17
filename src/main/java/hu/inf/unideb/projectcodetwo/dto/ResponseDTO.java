package hu.inf.unideb.projectcodetwo.dto;

public class ResponseDTO {

    private String message;

    private Long id;


    public ResponseDTO(Long id, String message) {
        this.message = message;
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

}
