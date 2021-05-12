package hello.service;

import hello.dao.BlogDao;
import hello.entity.result.Result;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BlogServiceTest {
    @Mock
    BlogDao blogDao;
    @InjectMocks
    BlogService blogService;


    @Test
    public void getBlogsFromDb(){
        /*
        当调用 blogService.getBlogs 的时候
        会执行 blogDao.getBlogs
         */
        blogService.getBlogs(1,10,null);
        verify(blogDao).getBlogs(1,10,null);
    }

    @Test
    public void returnFailureWhenExceptionThrown(){
        when(blogDao.getBlogs(anyInt(),anyInt(),any())).thenThrow(new RuntimeException());

        Result result = blogService.getBlogs(1,10,null);
        System.out.println(result.getStatus());
        System.out.println(result.getMsg());
        Assertions.assertEquals("fail",result.getStatus());
        Assertions.assertEquals("系统异常",result.getMsg());
    }


}