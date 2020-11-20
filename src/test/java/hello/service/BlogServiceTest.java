package hello.service;

import hello.dao.BlogDao;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;

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
        Mockito.verify(blogDao).getBlogs(1,10,null);
    }
}