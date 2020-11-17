package hello.service;

import org.springframework.stereotype.Service;

import javax.inject.Inject;

@Service
public class OrderService {
    private UserService userService;

    @Inject
    public OrderService(UserService userService) {
        this.userService = userService;
    }

    public void placeOrder(Integer userId, String item){
        User user = userService.getUserById(userId);
        System.out.println(user);
    }
}
