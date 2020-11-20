package hello.service;

import hello.entity.User;
import hello.dao.UserMapper;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {
    @Mock
    BCryptPasswordEncoder mockEncoder;
    @Mock
    UserMapper mockMapper;

    @InjectMocks
    UserService userService;

    @Test
    public void testSave(){
        userService.save("aaa","123456");
        // 当 mockEncoder调用 encode("123456") 模拟返回 "加密后的密码"
        when(mockEncoder.encode("123456")).thenReturn("加密后的密码");
        // 执行这个假设
        userService.save("aaa","123456");
        // 验证 mockMapper save的时候
        Mockito.verify(mockMapper).save("aaa","加密后的密码");
    }

    @Test
    public void testGetUserByUsername(){
        userService.getUserByUsername("aaa");

        Mockito.verify(mockMapper).findUserByUsername("aaa");
    }

    // 断言抛出异常
    @Test
    public void throwExceptionWhenUserNotFound(){
        // 此句可省略 当你不进行配置的时候 就是 返回 null
        // when(mockMapper.findUserByUsername("myUser")).thenReturn(null);

        // 保证这个断言 丢出这个异常 找不到 username的时候
        Assertions.assertThrows(UsernameNotFoundException.class,()->{
            userService.loadUserByUsername("myUser");
        });
    }

    @Test
    public void returnUserDetailsWhenUserfound(){
        when(mockMapper.findUserByUsername("myUser")).
                thenReturn(new User(123,"myUser","pwd"));
        UserDetails userDetails = userService.loadUserByUsername("myUser");
        Assertions.assertEquals("myUser",userDetails.getUsername());
        Assertions.assertEquals("pwd",userDetails.getPassword());
    }
}