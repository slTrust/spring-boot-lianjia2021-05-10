package hello.service;

import hello.dao.BlogDao;
import hello.entity.Blog;
import hello.entity.BlogResult;
import hello.entity.User;
import org.springframework.stereotype.Service;

import javax.inject.Inject;
import java.util.List;

@Service
public class BlogService {
    private BlogDao blogDao;
    private UserService userService;

    @Inject
    public BlogService(BlogDao blogDao, UserService userService) {
        this.blogDao = blogDao;
        this.userService = userService;
    }

    public BlogResult getBlogs(Integer page, Integer pageSize, Integer userId){
       try{
           List<Blog> blogs = blogDao.getBlogs(page,pageSize,userId);

           // 这个方式 非常非常没有效率 ，仅供测试使用
           blogs.forEach(blog->{
               User user = userService.getUserById(blog.getUserId());
               blog.setUser(user);
           });
           int count = blogDao.count(userId);

           int pageCount = count%pageSize == 0 ? count / pageSize :count / pageSize + 1;

           return BlogResult.newBlogsResults(blogs,count,page,pageCount);
       }catch (Exception e){
           e.printStackTrace();
           return BlogResult.failure("系统异常");
       }
    }
}
