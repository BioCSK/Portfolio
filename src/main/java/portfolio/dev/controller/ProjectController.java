package portfolio.dev.controller;

import com.sun.tools.jconsole.JConsoleContext;
import org.jboss.jandex.Main;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
public class ProjectController {

    @GetMapping("/project")
    public String getProjectPage(){
        return "redirect:/project";
    }
}
