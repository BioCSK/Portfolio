package portfolio.dev;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class DevApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	void test(){
		int a = 5;
		int b=9;
		int c;

		c = b % 5 < 5 ?  1 : 0 ; // c = 1;
		c = c | c << 3 ; // c=9;
		System.out.println("c = " + c);
	}

}
