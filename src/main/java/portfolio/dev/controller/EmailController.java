package portfolio.dev.controller;


import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import portfolio.dev.dto.email.EmailForm;
import portfolio.dev.service.EmailService;

@Controller
@RequestMapping("/email")
@Slf4j
public class EmailController {


    private final EmailService emailService;

    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }


    @GetMapping
    public String sendEmail(EmailForm emailForm){

        log.info("email request : { }",emailForm);
        return emailService.sendEmail(emailForm);
    }
}
