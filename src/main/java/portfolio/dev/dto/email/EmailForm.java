package portfolio.dev.dto.email;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class EmailForm {

    String requestorName;

    String requestorEmail;

    String content;

    @Override
    public String toString() {
        return "EmailForm{" +
                "requestorName='" + requestorName + '\'' +
                ", requestorEmail='" + requestorEmail + '\'' +
                ", content='" + content + '\'' +
                '}';
    }
}
